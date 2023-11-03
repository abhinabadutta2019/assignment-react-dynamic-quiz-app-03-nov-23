const QuestionDetail = ({ oneObj }) => {
  //   console.log(oneObj);
  return (
    <>
      <li key={oneObj._id}>
        <p>{oneObj.question}</p>

        {oneObj.options.map((oneAns, index) => (
          <p key={index}>
            <input type="checkbox" />
            {oneAns}
          </p>
        ))}
      </li>
    </>
  );
};

export { QuestionDetail };
