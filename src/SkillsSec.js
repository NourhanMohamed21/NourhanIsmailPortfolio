import Skills from './Components/Skills';
import skills from "./Components/SkillsList"

export default function SkillsSec(){
    const Skill = skills.map(item => {
      return (
          <Skills
              key={item.id}
              {...item}   
          />
      )
  })   
return (
 <div className='Skills' id='SkillsSec'>
 <h1 className='Skills--tittle'>
    Skills
  </h1>  
  <br />
  {Skill}
  </div>
)

}