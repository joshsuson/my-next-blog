import React from "react";
import JobPost from "../../components/JobPost";
import Layout from "../../components/Layout";
import { getAllJobsIds, getJobsData } from "../../lib/jobs";

export async function getStaticPaths() {
  const paths = getAllJobsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const jobData = await getJobsData(params.id);
  return {
    props: {
      jobData,
    },
  };
}

export default function JobTemplate({ jobData }) {
  return (
    <Layout>
      <h1>{jobData.title}</h1>
      <h2>{jobData.id}</h2>
      <h2>{jobData.date}</h2>
      <JobPost content={jobData.contentHtml} />
    </Layout>
  );
}
