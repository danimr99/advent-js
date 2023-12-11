const lastBackup = 1546300800;
const changes = Object.freeze([
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
]);

function getFilesToBackup(lastBackup, changes) {
  const filesToBackup = new Set();

  for (const [file, timestamp] of changes) {
    if (timestamp > lastBackup) {
      filesToBackup.add(file);
    }
  }

  return Array.from(filesToBackup).sort((a, b) => a - b);
}

console.log(getFilesToBackup(lastBackup, changes));
