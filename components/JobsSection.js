import React from "react";
import Link from "next/link";

export default function JobsSection({ jobs }) {
  return (
    <div>
      <h1>This is the jobs section</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link href={`/jobs/${job.id}`}>
              <a>{job.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
