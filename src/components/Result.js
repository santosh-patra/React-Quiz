import React from 'react'

const Result = ({score,playAgain})=>(
    <div className="score-board">
        <div className="score">You Have Scored {score}/5 Correct Answers</div>
        <button className="playBtn" onClick={playAgain}>Play Again!</button>
    </div>
)

export default Result