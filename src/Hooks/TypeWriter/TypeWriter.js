import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypewriterHook = () => {
    const { text, count } = useTypewriter({
      words: ['HTML & CSS', 'Javascript', 'Python', 'SQL', 'MongoDB', 'NodeJS', 'Django', 'AngularJS', 'ReactJS'],
      loop: 10,
      typeSpeed: 50,
      delaySpeed: 2000
    })
  
    return (
      <>
        <span style={{color: "rgb(78, 200, 216)"}}>{text} <Cursor /></span>
        
      </>
    )
  }

  export default TypewriterHook