import getUrl from "./utilis";

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "b",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const bg1 = { backgroundColor: "red" };
const bg2 = { backgroundColor: "" };
const isColor = true;

export default function Test() {
  return (
    <div style={person.theme}>
      <h1 style={isColor ? bg1 : bg2}>{person.name}'s Todos</h1>
      <img
        className="avatar"
        // src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
        src={getUrl(person)}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
