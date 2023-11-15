export const FeedbackOptions = ({
  onUpdateGood,
  onUpdateNeutral,
  onUpdateBad,
}) => {
  return (
    <>
      <button onClick={onUpdateGood}>good</button>
      <button onClick={onUpdateNeutral}>neutral</button>
      <button onClick={onUpdateBad}>bad</button>
    </>
  );
};

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <>
//       {options.map(option => (
//         <button key={option} onClick={() => onLeaveFeedback(option)}>
//           {option}
//         </button>
//       ))}
//     </>
//   );
// };
