import { useState } from "react";
import Button from "../Button/Button";
import "./style.css";
import { FeedbackContainer } from "./style";
import { FeedbackResultContainer } from "./style";
import { LikeDislikeContainer } from "./style";
import { StyledResult } from "./style";

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDisikes] = useState<number>(0);

  const addLike = (): void => {
    setLikes((prevValue) => prevValue + 1);
  };

  const addDislike = (): void => {
    setDisikes((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLikes(0);
    setDisikes(0);
  };

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <div className="result">{likes}</div>
          <Button name="LIKE" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <StyledResult>{dislikes}</StyledResult>
          <Button name="DISLIKE" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" onClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
