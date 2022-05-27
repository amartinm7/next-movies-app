const fs = require("fs");
const replace = require("stream-replace");
const chalk = require("chalk");
const util = require("./util");
const info = chalk.keyword("cyan");
// eslint-disable-next-line import/order
const camelCase = require("lodash.camelcase");

class CreateResources {
  _generateKeyWords(useCase) {
    const instanceUseCase = camelCase(useCase);
    const folderDest = "created";
    const outputPath = "build/" + folderDest;
    return { useCase, instanceUseCase, folderDest, outputPath };
  }

  async run({ useCase }) {
    const keywords = this._generateKeyWords(useCase);
    const folders = [
      "adomain",
      "application",
      "infrastructure/repository",
      "infrastructure/usecase",
    ];
    await this.createDestFolders(
      folders,
      keywords.outputPath,
      keywords.instanceUseCase
    );
    const mapper = {
      UseCase: "infrastructure/usecase",
      Provider: ".",
      Repository: "infrastructure/repository",
      Service: "application",
    };
    // eslint-disable-next-line no-path-concat
    const templatesFolder = __dirname + "/../templates";
    await util.createFolder(keywords.outputPath);
    fs.readdirSync(templatesFolder).forEach((templateName) => {
      const outputFileName = `${keywords.outputPath}/${keywords.instanceUseCase}/${mapper[templateName]}/${keywords.useCase}${templateName}.js`;
      const templatePath = `${templatesFolder}/${templateName}`;
      fs.createReadStream(templatePath)
        .pipe(replace(/{{useCase}}/gi, keywords.useCase))
        .pipe(replace(/{{instanceUseCase}}/gi, keywords.instanceUseCase))
        .pipe(fs.createWriteStream(outputFileName));
      console.log(info(outputFileName));
    });
  }

  createDestFolders(folders, outputPath, instanceUseCase) {
    folders.forEach((folder) =>
      util.createFolder(`${outputPath}/${instanceUseCase}/${folder}`)
    );
  }
}

module.exports = CreateResources;
