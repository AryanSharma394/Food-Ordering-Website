// import { useState } from "react";

// just for practice //

// const Section = ({ title, info,isvisible,setisvisible }) => {
// //   const [isvisible, setisvisible] = useState(false);
//   return (
//     <div className="border border-black p-2 m-2">
//       <h1 className="font-bold">{title}</h1>
//       {isvisible ? (
//         <button
//           onClick={() => {
//             setisvisible(false);
//           }}
//           className="cursor-pointer border border-black"
//         >
//           Hide
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             setisvisible(true);
//           }}
//           className="cursor-pointer border border-black"
//         >
//           Show
//         </button>
//       )}

//       {isvisible && <p>{info}</p>}
//     </div>
//   );
// };
// const Instamart = () => {
//     const[visiblesection,setisvisiblesection]=useState("about");
//   return (
//     <div>
//       <h1 className="font-bold text-3xl">Instamart</h1>
//       <Section
//         title={"first"}
//         info={
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
//         }
//         isvisible={visiblesection==="about"}
//         setisvisible={()=>setisvisiblesection("about")}
        
//       />
//       <Section
//         title={"second"}
//         info={
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
//         }
//         isvisible={visiblesection==="team"}
//         setisvisible={()=>setisvisiblesection("team")}
//       />
//       <Section
//         title={"third"}
//         info={
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
//         }
//         isvisible={visiblesection==="carrier"}
//         setisvisible={()=>setisvisiblesection("carrier")}
//       />
//     </div>
//   );
// };

// export default Instamart;
