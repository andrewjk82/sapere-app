import fs from 'fs';

const filePath = 'src/components/Curriculum.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `{/* Year 11 Advanced Chapter 6 */}
                       <div className="sync-card">
                         <div className="sync-card-info">
                           <span className="sync-card-badge y11">Y11 ADV CH6</span>
                           <span className="sync-card-title">Trigonometry (Ch6)</span>
                         </div>
                         <div className="sync-card-actions">
                           <button onClick={() => handleSyncY11AdvCh6(false)} disabled={isMigrating} className="sync-btn primary">
                             🔄 Sync
                           </button>
                           <button onClick={() => handleSyncY11AdvCh6(true)} disabled={isMigrating} className="sync-btn danger">
                             🗑️ Reset & Sync
                           </button>
                         </div>
                       </div>`;

// Let's use a simpler search since spacing might vary
const searchPattern = `Trigonometry (Ch6)</span>`;
if (content.includes(searchPattern)) {
  console.log('Found Trigonometry (Ch6) in Curriculum.jsx.');
  
  // Find the closing </div> of the Chapter 6 sync-card
  const startIdx = content.indexOf(searchPattern);
  const nextClosingDiv = content.indexOf('</div>', startIdx); // closing of sync-card-info
  const actionsDiv = content.indexOf('<div className="sync-card-actions">', nextClosingDiv);
  const closingActionsDiv = content.indexOf('</div>', actionsDiv); // closing of sync-card-actions
  const closingCardDiv = content.indexOf('</div>', closingActionsDiv + 6); // closing of sync-card itself
  
  if (closingCardDiv !== -1) {
    const endPos = closingCardDiv + 6; // include '</div>'
    const before = content.substring(0, endPos);
    const after = content.substring(endPos);
    
    const injection = `\n\n                        {/* Year 11 Advanced Chapter 7 */}
                        <div className="sync-card">
                          <div className="sync-card-info">
                            <span className="sync-card-badge y11">Y11 ADV CH7</span>
                            <span className="sync-card-title">Coordinate Geometry (Ch7)</span>
                          </div>
                          <div className="sync-card-actions">
                            <button onClick={() => handleSyncY11AdvCh7(false)} disabled={isMigrating} className="sync-btn primary">
                              🔄 Sync
                            </button>
                            <button onClick={() => handleSyncY11AdvCh7(true)} disabled={isMigrating} className="sync-btn danger">
                              🗑️ Reset & Sync
                            </button>
                          </div>
                        </div>`;
                        
    content = before + injection + after;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully injected Chapter 7 sync card into Curriculum.jsx!');
  } else {
    console.error('Could not find the closing card div.');
  }
} else {
  console.error('Could not find search pattern in Curriculum.jsx.');
}
