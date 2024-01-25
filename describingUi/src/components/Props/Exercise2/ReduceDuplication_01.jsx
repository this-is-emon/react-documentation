import Profile from "./Profile";

function ReduceDuplication_01() {
  return (
    <>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          size: 70,
          profession: "physicist and chemist",
          discovery: "polonium (chemical element)",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
        }}
      />
      <Profile
        person={{
          imageId: "YfeOqp2",
          name: "Katsuko Saruhashi",
          profession: "geochemist",
          discovery: "a method for measuring carbon dioxide in seawater",
          awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
        }}
      />
    </>
  );
}

export default ReduceDuplication_01;
