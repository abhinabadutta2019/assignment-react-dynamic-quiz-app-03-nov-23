const QuestionDetail = ({ objectList }) => {
  return (
    <>
      {objectList.map((oneObj) => (
        <li key={oneObj._id}>
          <p>{oneObj.question}</p>
          {oneObj.options.map((oneAns, index) => (
            <p key={index}>{oneAns}</p>
          ))}
        </li>
      ))}
    </>
  );
};

export { QuestionDetail };
