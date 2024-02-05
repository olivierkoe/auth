import React from "react";
import Mention from "../../components/mentionLegale";

const MentionLegale = () => {
  return (
    <div>
      <h1>{Mention.title}</h1>
      {Mention.date} <br />
      <br />
      <p>
        {Mention.desc} {Mention.email}
      </p>
      <br />
      <h2>{Mention.article1title}</h2>
      <br />
      <p>
        {Mention.studio}
        {Mention.adress}
        {Mention.SIREN}
        {Mention.article1desc}
      </p>
      <br />
      <h2>{Mention.article2title}</h2>
      <br />
      <h3>{Mention.article2_1title}</h3>
      <br />
      <p>{Mention.article2_1desc}</p>
      <br />
      <h3>{Mention.article2_1_1title}</h3>
      <br />
      <p>{Mention.article2_1_1desc}</p>
      <br />
      <h3>{Mention.article2_1_2title}</h3>
      <br />
      <p>{Mention.article2_1_2desc}</p>
      <br />
      <h3>{Mention.article2_2title}</h3>
      <br />
      <p>{Mention.article2_2desc}</p>
      <br />
      <h3>{Mention.article3title}</h3>
      <br />
      <p>{Mention.article3desc}</p>
      <br />
      <h3>{Mention.article4title}</h3>
      <br />
      <p>{Mention.article4desc}</p>
      <br />
      <h3>{Mention.article5title}</h3>
      <br />
      <p>{Mention.article5desc}</p>
      <br />
      <h3>{Mention.article6title}</h3>
      <br />
      <p>{Mention.article6desc}</p>
      <br />
      <h3>{Mention.article7title}</h3>
      <br />
      <p>{Mention.article7desc}</p>
      <br />
      <h3>{Mention.article8title}</h3>
      <br />
      <p>{Mention.article8desc}</p>
      <br />
    </div>
  );
};

export default MentionLegale;
