# Openfolio

This is an **open-source portfolio** that you can personalize **fast, easy & realiable**. It simply requires compilation, some changes in typescript config files, and the addition of desired photos, videos, and documents. Simple to use & setup!

Angular v17, Bootstrap v5.3, and Bootstrap Icons v1.11 were used in its design.

### [Example website](https://danaremar.github.io/openfolio/)

<br>

## Install dependencies
Requires [**NodeJS**](https://nodejs.org/en/download/current) installed on the environment. Use the following command in the terminal to install all dependencies (on Windows, use cmd to avoid PowerShell restrictions):

    npm install

Install process will take 1-5 minutes.

<br>

## Customize

### Files (images, videos, documents..)

Files can be found into  *`src/assets`* folder. For *projects* it's recommended to create one folder per each one.

There are some important files like:

 - **logo.svg**: represents the logo in the left side of the navbar.
 - **home-video.webm/.mp4**: represent home background video.
 - **profile.avif/.jpg**: represents your photo. Please put both images. If you want to convert to *.avif* file extension you can use: https://convertio.co/es/jpg-avif/
 - **contact-light.avif/.jpg**: represents contact background image when light theme is active.
 -  **contact-dark.avif/.jpg**: represents contact background image when dark theme is active.

If you want to remove stars effect, please remove *"src/stars.scss",* line in *`angular.json`* file.

 ---

### Recomendations

***Resources***
All images, videos, logos... must be non-copyrighted or yours. If you don't have your own resources, you can search in:
- Images / videos: [Pixabay](https://pixabay.com/es/)
- Logo / image AI creation: [Bing chat (Copilot)](https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=undexpand)
- Translator: [DeepL](https://www.deepl.com/es/translator)


***Icons***
Use framework icons or in some cases SVG files, avoid images. In config.ts refers to imported framework icon classes.

- [Bootstrap Icons](https://icons.getbootstrap.com/) (included)
- [Fontawesome](https://fontawesome.com/icons) (not included): just add to `angular.json` & `package.json` files before compilation.

***Videos***
- **.webm**: smallest one but 90% device compatibility, recommended use with other formats
- **.mp4**: normal, recommended for compatibility


***Images***
- **.avif**: smallest one but 60% device compatibility, recommended use with other formats
- **.webp**: small but 90% device compatibility, recommended use with other formats
- **.jpg**: normal, recommended for compatibility
- **.png**: so heavy

---

### config.ts
Includes main configurations of the portfolio without language. Located in *`src/assets`*, contains:

- **languages**: configure languages.

	> *defafult*: default lang when user enters into portfolio.

	> *list*: all avaliable languages. Translations must be present in *`{lang}.json`* files.

	> *showFlag*: language selector show language flag icon

	> *showText*: language selector show language text

	> *showDropdown*: enable dropdown or row view for language selector

	> *multiLanguage*: enable multiple languages. If you want only 1 language, you can select this property to false and select the required language in *default* property

		export const languages = {
			default:  "en",
			list: ["es", "en"],
			showFlag:  true,
			showText:  true,
			showDropdown:  true,
			multiLanguage:  true
		}

 - **features**: enable/disable selected features

		export const features  = {
			home:  true,
			qualification:  true,
			experience:  true,
			skills:  true,
			products:  true,
			services:  false,
			contact:  true
		}

- **contacts**:  phone, mail, messenger, telegram, GitHub, Instagram...

	> *info*: showed in the website

	> *icon*: refers framework classes ([Bootstrap Icons](https://icons.getbootstrap.com/) by default)
	
	> *link*: refers attribute to be added in href
		- mailto: (email)
		- tel: (phone)

		export const contacts  = [
			{
				platform:  "Email",
				info:  "someemail@email.me",
				icon:  "bi bi-envelope",
				link:  "mailto:someemail@email.me"
			},
			...
		]

---

### config.{lang}.ts
Configutation files for each language. It's located in *`src/assets/langs`* with the HTML translation files *`{lang}.json`*.

 - **profile**: contains info about name, role, description & homeVideo (with multiple sources/media formats).
	> *shakeHand*: enable hand moving effect
	
	> *fastContacts*: enable show icons with the contacts
	
		profile: {
			name:  "Name Surname", 
			role: [
				"Software Developer",
				"Designer",
				...
			],
			shakeHand:  true,
			fastContacts: true,
			description:  "I am a passionate software developer with a focus on crafting innovative web solutions..."
		}

- **qualifications**: contains info about studies & certifications.

		qualifications: [
			{
				title:  "Software Engineer Degree",
				starts:  "October 2018",
				ends:  "July 2022",
				location:  "University of Madrid",
				text:  "If you wanna tell the contains"
			},
			...
		]

- **experience**: contains info about working experience & commercial relationships.

		experience: [
			{
				title:  "Software Developer",
				company:  "Google",
				starts:  "August 2020",
				ends:  "Actual",
				knowledge: [
					"Java development",
					...
				]
			},
			...
		]

- **skills**: all technical skills grouped by role.

		skills: [
			{
				group:  "Software Engineer",
				stack: [
					{
						name:  "Java",
						percentage:  90,
						link:  "https://github.com/..."
					},
				]
			},
			...
		]

- **softskills**: personal attributes that enable someone to interact effectively with others.

	> *icon*: refers framework classes ([Bootstrap Icons](https://icons.getbootstrap.com/) by default)

		softskills: [
			{
				name:  "Teamwork",
				icon:  "bi bi-people"
			},
			...
		]

- **products**: created products that you want to show.

	> *images*: showed in carousel

	> *sources*: where people can find more about this project

	> *icon*: refers framework classes ([Bootstrap Icons](https://icons.getbootstrap.com/) by default)

	> *link*: refers to website

		products: [
			{
				name: "Openfolio",
				description: [
					"Open-source personal portfolio using Angular and Bootstrap, easily configurable with just one file.",
					"The portfolio features both dark and light themes, boasting a responsive and minimalist design.",
					"It has been constructed as an open-source project, providing the opportunity for individuals to create their own instances as well. Check it out on GitHub!",
					...
				],
				secondary: "Angular + Bootstrap",
				images: [
					"products/openfolio/03.jpg",
					"products/openfolio/04.jpg",
					"products/openfolio/05.jpg",
				],
				sources: [
					{
						icon: "bi bi-github",
						link: "https://github.com/danaremar/portfolio"
					},
					...
				]
			},
			...
		]

- **services**: all services or products that you offer.

		services: [
			{
				name: "Portfolio",
				description: "Introducing a personalized portfolio, personal website, or CV that showcases the best of you. From personal details to skills and services, all presented in a top-notch, responsive design. Make your online presence impeccable and attractive—because you deserve to stand out!",
				tags: ["web","Openfolio", ...],
				images: [
					"products/portfolio/01.jpg",
					...
				],
				pricing: [
					{
						name: "Basic",
						description: "2 services + 4 products",
						price: "75€"
					},
					...
				]
			},
			...
		]

<br>

## Build in local
Requires all dependencies installed & execute this command:

	npm s --o

Build process will take 5-10 seconds.

<br>

## Deploy on github pages
Just execute ***`gh-pages.cmd`*** in your GitHub repository (in local, doesn't matter the branch) or the following git commands:

	ng build --configuration=production --base-href="./"
	git add dist -f && git commit -m "GitHub pages upload"
	git subtree push --prefix dist origin gh-pages

This script creates new branch called *gh-pages* which contains only your compiled files. When you complete that, go inside your project to "*Settings / Pages*" and select "*gh-pages*" to deploy.

Deploy process will take 1-5 minutes.

<br>

## Lighthouse
Lighthouse is a browser addon that helps you improve the quality of your web pages. 
The punctuation of the original Openfolio used in the GitHub page is:

 - Performance: 99/100
 - Accesibility: 100/100
 - Best Practices: 100/100
 - SEO: 100/100

![Openfolio punctuation in Lighthouse](https://i.ibb.co/w4crtXZ/image-2023-11-20-21-36-54.png)

<br>

## License  
The software is governed by the **GPLv3.0** license, signifying its commitment to an open-source approach. This license grants users the freedom to view, modify, and distribute the source code, fostering collaboration and community-driven development.

<br>

## Authors
If you want to participate in the creation of this product, do not hesitate to contact me:

- [Daniel Arellano](https://www.linkedin.com/in/danielarellano99/)🖖 (creator)