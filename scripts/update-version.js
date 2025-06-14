const fs = require("fs");
const path = require("path");

const newVersion = process.argv[2];
if (!newVersion) {
	console.error("❌ Please provide a new version. Example: node update-version-line.js 1.2.3");
	process.exit(1);
}

const ignoreDirs = ["node_modules", ".git", "dist", "build", "coverage", "out"];

function updateVersionLine(filePath) {
	try {
		const lines = fs.readFileSync(filePath, "utf-8").split("\n");
		let changed = false;

		const newLines = lines.map((line) => {
			if (line.trim().startsWith('"version"')) {
				const updated = line.replace(/"version":\s*".*?"/, `"version": "${newVersion}"`);
				changed = true;
				return updated;
			}
			return line;
		});

		if (changed) {
			fs.writeFileSync(filePath, newLines.join("\n"));
			console.log(`✅ Updated version in: ${filePath}`);
		}
	} catch (err) {
		console.error(`❌ Failed to update ${filePath}:`, err.message);
	}
}

function walkDir(dir) {
	const files = fs.readdirSync(dir);

	for (const file of files) {
		const fullPath = path.join(dir, file);
		const stat = fs.statSync(fullPath);

		if (stat.isDirectory()) {
			if (!ignoreDirs.includes(file)) {
				walkDir(fullPath);
			}
		} else if (file === "package.json") {
			updateVersionLine(fullPath);
		}
	}
}

walkDir(process.cwd());
