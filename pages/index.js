import JobsSection from "../components/JobsSection";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import { getSortedJobsData } from "../lib/jobs";

export async function getStaticProps() {
  const mostRecentJobs = getSortedJobsData().slice(0, 3);
  return {
    props: {
      mostRecentJobs,
    },
  };
}

export default function Home({ mostRecentJobs }) {
  return (
    <Layout>
      <Jumbotron />
      <JobsSection jobs={mostRecentJobs} />
    </Layout>
  );
}
