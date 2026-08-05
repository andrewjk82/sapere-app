const fs = require('fs');

let content = fs.readFileSync('src/constants/seedYear11Ch4CQuestions.js', 'utf8');

// We will split the file by objects.
let questions = content.split(/\s*\{\s*"id":/);

let newContent = questions[0];

for (let i = 1; i < questions.length; i++) {
    let q = '{\n    "id":' + questions[i];
    
    // Extract answer
    let match = q.match(/"a":\s*"([^"]+)"/);
    if (match) {
        let ans = match[1];
        
        let opt1 = ans;
        let opt2 = ans + " (incorrect)";
        let opt3 = "None of the above";
        let opt4 = "Cannot be determined";
        
        if (ans.includes('twice')) {
            opt2 = ans.replace('twice', 'once');
            opt3 = ans.replace('twice', 'zero times');
            opt4 = 'does not intersect';
        } else if (ans.includes('rational')) {
            opt2 = ans.replace('rational', 'irrational');
            opt3 = 'no real zeroes';
            opt4 = ans.includes('distinct') ? ans.replace('distinct', 'equal') : ans.replace('equal', 'distinct');
        } else {
            let nums = ans.match(/-?\d+/);
            if (nums) {
                let n = parseInt(nums[0]);
                opt2 = ans.replace(nums[0], String(n + 1));
                opt3 = ans.replace(nums[0], String(n - 1));
                opt4 = ans.replace(nums[0], String(-n));
            }
        }
        
        // Basic shuffle logic
        let opts = [opt1, opt2, opt3, opt4];
        opts = [...new Set(opts)]; // unique
        while(opts.length < 4) opts.push("Option " + Math.random().toString(36).substr(2, 5));
        
        for (let k = opts.length - 1; k > 0; k--) {
            const j = Math.floor(Math.random() * (k + 1));
            [opts[k], opts[j]] = [opts[j], opts[k]];
        }
        
        let optsStr = `,\n    "options": [\n      "${opts[0]}",\n      "${opts[1]}",\n      "${opts[2]}",\n      "${opts[3]}"\n    ]`;
        
        q = q.replace(/"a":\s*"[^"]+"/, match[0] + optsStr);
    }
    
    // Change type
    q = q.replace(/"type":\s*"short_answer"/, '"type": "multiple_choice"');
    
    newContent += q;
}

fs.writeFileSync('src/constants/seedYear11Ch4CQuestions.js', newContent);
console.log("Converted to multiple_choice successfully!");
