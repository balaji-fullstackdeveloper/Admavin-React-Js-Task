import { useState } from "react";
import "./File.css";
import file from "./file.json";

function FileHome() {
  const [files, setFiles] = useState([0, []]);
  const [files1, setFiles1] = useState([0, []]);

  return (
    <div className="fileHome">
      <div className="fileBox">
        <p className="file-heading">Nested List</p>
        <div className="fileContainer">
          <div className="">
            {file.map((file, i) => {
              return (
                <div
                  key={i}
                  className="folder-box"
                  onClick={() => {
                    setFiles([i, file.child]);
                    setFiles1([0, []]);
                  }}
                >
                  <div>
                    📁{file.title}
                    <span>{file.child.length > 0 && "》"}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {files[1].length > 0 ? (
            <div style={{ marginTop: files[0] * 62 }} className="">
              {files[1].map((file, i) => {
                return (
                  <div
                    key={i}
                    className="folder-box"
                    onClick={() => {
                      setFiles1([i + files[0], file.child]);
                    }}
                  >
                    <div>
                      📁{file.title}
                      <span>{file.child.length > 0 && "》"}</span>
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          ) : (
            <div></div>
          )}
          {files1[1].length > 0 ? (
            <div style={{ marginTop: files1[0] * 62 }} className="">
              {files1[1].map((file, i) => {
                return (
                  <div className="folder-box" key={i}>
                    <div>
                      📁{file.title}
                      <span>{file.child.length > 0 && "》"}</span>
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileHome;
