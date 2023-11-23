import { Component } from '@angular/core';
import { skills, softskills } from 'src/assets/config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = skills
  softskills = softskills

}
