import React from "react"
import * as Style from "./style.js"
//import { Experiences, Softskills } from "./data"
import Experiences from "./data"
import Softskills from "./data-skill"
import Container from '../global/Container'

const Experience =(props)=>{
	return (
		<Container
			width="large"
			history={props.history}
			FirstTitle="Curriculum vitae"
			SecondTitle={<React.Fragment>Besides from my research, <br /> I&#39;ve applied interships in various industries in order to pursue my dream</React.Fragment>}
			ThirdTitle="My title"

		>	<Style.Delimiter device={props.device}>
						<h1>Technical Skills</h1>
						<Style.HR />
		    </Style.Delimiter>
			<Style.Softskills device={props.device}>
		    {
				Softskills.map((softskill, index) => {
					return (
						<div key={index}>
						<div>
						<h1>{softskill.technologygroup}</h1>
						<h3> {softskill.technology} </h3>
						</div>
						</div>
					);
			})
			}
		    </Style.Softskills>

			<Style.Delimiter device={props.device}>
						<h1>Experience</h1>
						<Style.HR />
		    </Style.Delimiter>
			<Style.Timeline device={props.device}>
				{
					Experiences.map((experience, index)=>{
						return (
							<div key={index}>
								<div>
									<h2> <div>{experience.startDate} ─<br />{experience.endDate}</div> </h2>
									<h1>{experience.title}</h1>
									<h3>@ {experience.company}</h3>

								</div>
								<div>
									{
										experience.description.map((content, index)=><p key={index}>● {content}</p>)
									}
								</div>
								<div>
								<h3> GOALS: </h3>
								</div>
								<div>
									{
										experience.goals.map((content, index)=><p key={index}>✔ {content}</p>)
									}
								</div>
							</div>
						);
					})
				}
			</Style.Timeline>
		</Container>
	);
};

export default Experience;
