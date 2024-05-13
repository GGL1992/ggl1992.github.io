import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as fs from "node:fs/promises";

const config = {
  s: {
    type: "诗",
    list: [],
  },
  c: {
    type: "词",
    list: [],
  },
};

async function getJsonFiles() {
  const currentFilePath = new URL(import.meta.url);
  const currentDirectory = dirname(fileURLToPath(currentFilePath));
  // 获取json文件夹的路径
  const pathConfigPath = join(currentDirectory, "../pageConfig/");
  const pathStat = await fs.stat(pathConfigPath);
  let hasDir = false; // 判断是否存在目录
  try {
    hasDir = pathStat.isDirectory();
  } catch (error) {
    hasDir = false;
  }
  if (!hasDir) {
    return [];
  }
  const pathFiles = await fs.readdir(pathConfigPath);
  return pathFiles.map((pathFile) => join(pathConfigPath, pathFile));
}

async function generateHtml(obj) {
  const {
    title,
    subtitle,
    description,
    shareImg,
    author,
    year,
    time,
    address,
    type,
    content,
  } = obj;
  const getDescription = () => {
    if (description) {
      return description;
    }
    let result = "";
    content.forEach((item) => {
      if (item !== "\n") {
        result += item;
      }
    });
    return result;
  };

  const getKeyWords = () => {
    let result = `${title},${year},${time},${type},如鱼诗词集,高国良,新未来,高国良诗词集,诗人高国良`;
    return result;
  };

  const getContent = () => {
    return content
      .map((item) => {
        let result = "";
        if (item === "\n") {
          result = "<br/>";
        } else {
          result = `<p>${item}</p>`;
        }
        return result;
      })
      .join("");
  };

  const getTitle = (title) => {
    return `${title}${subtitle ? "·" + subtitle : ""}-如鱼诗词集-高国良·新未来`;
  };

  const getShareImg = () => {
    return shareImg || "";
  };

  const html = `
  <!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="../assets/style/page/index.css" />
      <meta name="description" content="${getDescription()}" />
      <meta name="keywords" content="${getKeyWords()}" />
      <meta property="og:title" content="${getTitle(title)}" />
      <meta property="og:description" content="${getDescription()}" />
      <meta property="article:tag" content="${getKeyWords()}" />
      <meta property="article:author" content="${author}" />
      <meta property="og:type" content="blog" />
      <meta property="og:image" content="${getShareImg()}" />
      <meta name="image" content="${getShareImg()}">
      <title>${getTitle(title)}</title>
    </head>
    <body>
      <div class="g-poem-s__container">
        <div class="g-poem-s__wrapper">
          <div class="g-poem-s__content">
            ${getContent()}
          </div>
          <div class="g-poem-s__side">
            <div class="g-poem-s__side--title">
              <span>《</span>${title}${
    subtitle ? "·" + subtitle : ""
  }<span>》</span>
            </div>
            <div class="g-poem-s__side--date">${year}·${time}${
    address ? " " + address : ""
  }</div>
            <div class="g-poem-s__side--author">${author}</div>
          </div>
        </div>
      </div>
      <!-- <script src="../hooks/ios.js" defer></script> -->
    </body>
  </html>
    `;
  return html;
}

async function writePageInfo(filePaths) {
  await Promise.all(
    filePaths.map(async (filePath) => {
      const jsonContent = await fs.readFile(filePath, "utf-8");
      if (jsonContent) {
        const jsonObj = JSON.parse(jsonContent);
        const { title, author, year, time, type } = jsonObj;
        let fileName = Buffer.from(
          `${title}${author}${year}${time}${type}`
        ).toString("base64");
        fileName = fileName.replace(/\\/g, "");
        fileName = fileName.replace(/\//g, "");
        const htmlInfo = await generateHtml(jsonObj);
        const htmlPath = join(filePath, "../../page/", fileName + ".html");
        console.log("htmlPath:", htmlPath);
        await fs.writeFile(htmlPath, htmlInfo);
        if (["诗", "古体诗", "现代诗"].some((v) => v === type)) {
          config.s.list.push({
            ...jsonObj,
            htmlPath: `./page/${fileName}.html`,
          });
        } else if (["词"].some((v) => v === type)) {
          config.c.list.push({
            ...jsonObj,
            htmlPath: `./page/${fileName}.html`,
          });
        }
      }
    })
  );
}

async function getIndexInfo(config) {
  const getHtml = () => {
    const getSection = (list) => {
      return list
        .map((item) => {
          return `
            <div class="g-poem__module">
                <a href="${item.htmlPath}">
                    <div class="g-poem__module--title">${item.title}</div>
                    <div class="g-poem__module--subtitle">
                        ${item.year}<span>·</span>${item.time}
                    </div>
                </a>
            </div>
            `;
        })
        .join("");
    };

    let result = "";
    for (const key in config) {
      if (config[key].list.length > 0) {
        result += `
        <div class="g-poem__section">
            <div class="g-poem__section--title">${config[key].type}</div>
            <div class="g-poem__content">
                ${getSection(config[key].list)}
            </div>
        </div>
        `;
      }
    }
    return result;
  };

  const getTitle = () => {
    return `如鱼诗词集-新未来·高国良`;
  };
  const getKeyWords = () => {
    return `高国良,新未来,如鱼诗词集,高国良诗词集,诗人高国良`;
  };

  const getDescription = () => {
    return `你好，这里是高国良个人小站的诗词模块，我会在这里分享一些个人闲暇时候写的诗、词、曲子……`;
  };

  const getAuthor = () => {
    return `高国良`;
  };

  const getShareImg = () => {
    return ``;
  };

  const html = `<!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./assets/style/home/index.css?v=1.0.0.0" />
        <meta name="description" content="${getDescription()}" />
        <meta name="keywords" content="${getKeyWords()}" />
        <meta property="og:title" content="${getTitle()}" />
        <meta property="og:description" content="${getDescription()}" />
        <meta property="article:tag" content="${getKeyWords()}" />
        <meta property="article:author" content="${getAuthor()}" />
        <meta property="og:type" content="blog" />
        <meta property="og:image" content="${getShareImg()}" />
        <meta name="image" content="${getShareImg()}">
        <title>${getTitle()}</title>
      </head>
      <body>
        <div class="g-poem__container">
          ${getHtml()}
        </div>
        <!-- <script src="./hooks/ios.js" defer></script> -->
      </body>
    </html>
    `;

  return html;
}

async function getIndexPath() {
  const currentFilePath = new URL(import.meta.url);
  const currentDirectory = dirname(fileURLToPath(currentFilePath));
  const indexPath = join(currentDirectory, "../index.html");
  return indexPath;
}

async function writeIndex(indexPath, htmlInfo) {
  await fs.writeFile(indexPath, htmlInfo);
}

async function updateIndex() {
  const indexPath = await getIndexPath();
  const htmlInfo = await getIndexInfo(config);
  await writeIndex(indexPath, htmlInfo);
}

async function build() {
  const jsonFilesPath = await getJsonFiles();
  await writePageInfo(jsonFilesPath);
  await updateIndex();
}

build();
