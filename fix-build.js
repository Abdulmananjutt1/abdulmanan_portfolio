const { spawn } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const scriptIndex = args.findIndex(
    x => x === 'build' || x === 'eject' || x === 'start' || x === 'test'
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];

if (!script) {
    console.log('Unknown script "' + script + '".');
    console.log('Perhaps you need to update react-scripts?');
    process.exit(1);
}

// Resolve react-scripts binary
let reactScriptsPath;
try {
    reactScriptsPath = require.resolve('react-scripts/bin/react-scripts.js');
} catch (e) {
    reactScriptsPath = path.resolve(__dirname, 'node_modules/react-scripts/bin/react-scripts.js');
}

const commandArgs = [reactScriptsPath, ...args];

const env = {
    ...process.env,
    // Disable experimental webstorage to fix SecurityError in Node v25+
    NODE_OPTIONS: (process.env.NODE_OPTIONS || '') + ' --no-experimental-webstorage'
};

const child = spawn(process.execPath, commandArgs, {
    env,
    stdio: 'inherit'
});

child.on('close', code => {
    if (code !== 0) {
        process.exit(code);
    }
});

child.on('error', err => {
    console.error(err);
    process.exit(1);
});
