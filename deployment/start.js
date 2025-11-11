const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Data Assessment Platform...');

// Build the React app first
console.log('📦 Building React application...');
const buildProcess = spawn('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true
});

buildProcess.on('close', (code) => {
  if (code !== 0) {
    console.error('❌ Build failed');
    process.exit(1);
  }
  
  console.log('✅ Build completed successfully');
  console.log('🔄 Starting server...');
  
  // Start the server
  const serverProcess = spawn('node', ['server/server.js'], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: 'production',
      PORT: process.env.PORT || 8000
    }
  });
  
  serverProcess.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
    process.exit(code);
  });
});