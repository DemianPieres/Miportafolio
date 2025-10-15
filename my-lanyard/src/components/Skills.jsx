import {
	FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs, FaPython, FaFigma,
	FaGitAlt, FaDocker, FaAws, FaJava
  } from 'react-icons/fa';
  import {
	SiTypescript, SiMongodb, SiExpress, SiAdobephotoshop, SiAdobexd, SiVite
  } from 'react-icons/si';
  import { DiVisualstudio } from "react-icons/di";
  import { TbBrandCSharp } from "react-icons/tb";
  import LogoLoop from './LogoLoop';
  
  const skills = [
	{ name: 'HTML5', icon: <FaHtml5 />, color: 'bg-orange-500' },
	{ name: 'CSS3', icon: <FaCss3Alt />, color: 'bg-blue-500' },
	{ name: 'JavaScript', icon: <FaJs />, color: 'bg-yellow-500' },
	{ name: 'React', icon: <FaReact />, color: 'bg-sky-500' },
	{ name: 'TypeScript', icon: <SiTypescript />, color: 'bg-blue-700' },
	{ name: 'Node.js', icon: <FaNodeJs />, color: 'bg-green-600' },
	{ name: 'MongoDB', icon: <SiMongodb />, color: 'bg-green-700' },
	{ name: 'Python', icon: <FaPython />, color: 'bg-blue-800' },
	{ name: 'Figma', icon: <FaFigma />, color: 'bg-purple-500' },
	{ name: 'Git', icon: <FaGitAlt />, color: 'bg-red-500' },
	{ name: 'VSCode', icon: <DiVisualstudio />, color: 'bg-sky-600' },
	{ name: 'Java', icon: <FaJava />, color: 'bg-red-600' },
	{ name: 'C#', icon: <TbBrandCSharp />, color: 'bg-violet-600' },
  ];
  
  const SkillButton = ({ skill }) => (
	<div
	  className={`
		${skill.color} 
		aspect-square rounded-lg flex items-center justify-center 
		text-4xl text-white 
		cursor-pointer
		transition-all duration-200
		shadow-[0_8px_0_rgb(0,0,0,0.2)]
		hover:shadow-[0_4px_0_rgb(0,0,0,0.2)]
		active:shadow-[0_0_0_rgb(0,0,0,0.2)]
		hover:translate-y-1
		active:translate-y-2
	  `}
	>
	  {skill.icon}
	</div>
  );
  
  // Convertir las skills en nodos para LogoLoop
  const skillsForLoop = skills.map(skill => ({
	node: <SkillButton skill={skill} />,
	title: skill.name,
  }));
  
  // Mezclar aleatoriamente las skills
  const shuffledSkills = [...skillsForLoop].sort(() => Math.random() - 0.5);
  
  // Calcular cuántos íconos por fila (equilibrado)
  const perRow = Math.ceil(shuffledSkills.length / 3);
  
  // Dividir en tres filas balanceadas
  const row1 = shuffledSkills.slice(0, perRow);
  const row2 = shuffledSkills.slice(perRow, perRow * 2);
  const row3 = shuffledSkills.slice(perRow * 2);
  
  const Skills = () => {
	return (
	  <section id="habilidades" className="py-20 bg-black text-white">
		<div className="container mx-auto px-4">
		  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
			Habilidades
		  </h2>
		  <p className="text-center text-gray-400 mb-12 text-lg">
			Un vistazo a mi stack tecnológico.
		  </p>
		  <div className="relative flex flex-col gap-8 overflow-hidden">
			<LogoLoop
			  logos={row1}
			  speed={80}
			  direction="left"
			  logoHeight={80}
			  gap={32}
			/>
			<LogoLoop
			  logos={row2}
			  speed={80}
			  direction="right"
			  logoHeight={80}
			  gap={32}
			/>
			<LogoLoop
			  logos={row3}
			  speed={80}
			  direction="left"
			  logoHeight={80}
			  gap={32}
			/>
		  </div>
		</div>
	  </section>
	);
  };
  
  export default Skills;
  
