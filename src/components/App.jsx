import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQns={numQns} dispatch={dispatch} />
        )}

        {status === "active" && (
          <>
            <Progress
              qnIndex={qnIndex}
              numQns={numQns}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />

            <Question
              qn={questions[qnIndex]}
              dispatch={dispatch}
              answer={answer}
            />

            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />

              <NextButton
                dispatch={dispatch}
                answer={answer}
                points={points}
                qnIndex={qnIndex}
                numQns={numQns}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPoints={maxPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
