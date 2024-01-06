import React from "react";
import "../assets/css/works.css";
import { array_works as Works_list } from "../assets/components/works";
import { useState, useEffect } from "react";

export default function Project() {
  const [works, setworks] = useState([]);
  useEffect(() => {
    setworks(Works_list);
  }, []);
  
  return (
    <section className="max_resolution" id="works_section">
      <h2>Experience</h2>
      <h3>Some Proyect</h3>

      <div className="container_table">
        <table>
          <tbody id="table_works">
            <tr className="head">
              <th className="column_one">Year</th>
              <th className="column_two">Project</th>
              <th className="column_three">Tools</th>
              <th className="column_four">Link</th>
            </tr>
            {works.map((work, id) => (
              <tr key={id}>
                <td className="column_one">{work.year}</td>
                <td className="column_two">{work.project}</td>
                <td className="column_three">
                  {work.tools.map((tool) => (
                    <span key={tool} className="tool">
                      {tool}
                    </span>
                  ))}
                </td>
                <td className="column_four">
                  <a className="a" href={ work.link }  target="_blank">
                    Go
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
