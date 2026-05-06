import sys

with open('src/components/StudentDetail.jsx', 'r') as f:
    lines = f.readlines()

# Find the start and end of the Basic Calculation block
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if '<div className="section-title" style={{ fontSize: \'0.85rem\', fontWeight: 800, color: \'#1e1b4b\', letterSpacing: \'0.05em\', textTransform: \'uppercase\', margin: 0 }}>BASIC CALCULATION</div>' in line:
        # The card starts a few lines above
        start_idx = i - 4 # `<div style={styles.card} className="profile-card-mobile">`
        break

if start_idx != -1:
    # Find the end of this card block
    # We know it ends with `</div>\n            </div>\n` right before `</div>\n        );\n      case 'challenge':`
    for i in range(start_idx, len(lines)):
        if "case 'challenge':" in lines[i]:
            end_idx = i - 3 # The block ends 3 lines before `case 'challenge':`
            break

if start_idx != -1 and end_idx != -1:
    block = lines[start_idx:end_idx+1]
    
    # Remove the block from its original position
    del lines[start_idx:end_idx+1]
    
    # Find where to insert it (inside case 'challenge':)
    insert_idx = -1
    for i in range(len(lines)):
        if "case 'challenge':" in lines[i]:
            # Now we need to change the return statement in `case 'challenge':`
            # Currently it's:
            # return (
            #   <div style={styles.card} className="profile-card-mobile">
            #     ... CHALLENGE HISTORY ...
            #   </div>
            # );
            # We want to change it to:
            # return (
            #   <div style={{ display: 'grid', gap: '24px' }}>
            #     <div style={styles.card} className="profile-card-mobile">
            #       ... CHALLENGE HISTORY ...
            #     </div>
            #     [BASIC CALCULATION BLOCK]
            #   </div>
            # );
            
            return_idx = i + 1
            lines.insert(return_idx + 1, "          <div style={{ display: 'grid', gap: '24px' }}>\n")
            
            # Find the closing tag of the challenge history card
            for j in range(return_idx + 2, len(lines)):
                if "case 'default':" in lines[j] or "default:" in lines[j]:
                    close_idx = j - 3
                    lines.insert(close_idx, "          </div>\n")
                    
                    # Insert the block before the closing wrapper div
                    for k, block_line in enumerate(reversed(block)):
                        lines.insert(close_idx, block_line)
                    break
            break
            
    with open('src/components/StudentDetail.jsx', 'w') as f:
        f.writelines(lines)
    print("Move successful")
else:
    print("Could not find the block to move")
