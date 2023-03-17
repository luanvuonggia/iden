import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Indentity users using SBT",
          "Base on ICON Blockchain",
          "The Future of Metaverse innovations",
          "Secure and Scalable",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
