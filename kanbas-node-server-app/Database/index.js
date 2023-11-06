import courses from "./courses.json" assert { type: 'json' };
import links from './links.json' assert { type: 'json' };
import modules from './modules.json' assert { type: 'json' };
import {courseNav} from './courseNav.js'
import assignments from "./assignments.json" assert { type: 'json' };;
import { accountNav } from "./accountNav.js";
export default {
    courses,
    links,
    modules,
    courseNav,
    accountNav,
    assignments
};
