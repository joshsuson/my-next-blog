import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const jobsDirectory = path.join(process.cwd(), "jobs");

export function getSortedJobsData() {
  const fileNames = fs.readdirSync(jobsDirectory);
  const allJobsData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, "");

    const fullPath = path.join(jobsDirectory, filename);
    const filecontents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(filecontents);

    return {
      id,
      ...matterResult.data,
    };
  });
  return allJobsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllJobsIds() {
  const fileNames = fs.readdirSync(jobsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getJobsData(id) {
  const fullPath = path.join(jobsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
