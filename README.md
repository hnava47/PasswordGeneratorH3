<div id="top"></div>

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- Project Logo -->
<br/>
<div align="center">
    <img src="Assets/images/readmelogo.png" alt="Logo" width="80" height="80">
    <h1 align="center">Password Generator H3</h1>
</div>

<!-- Table of Contents -->
<details>
    <summary>Table of Contents</summary>
    <ol>
        <li><a href="#about-the-project">About The Project</a></li>
        <li><a href="#contact">Contact</a></li>
    </ol>
</details>
<br/>

## About The Project

This project is meant to create and deploy a password generator page. This page contains a text area which is populated with a systematic generated password through JavaScript. The password generator takes into consideration criteria such has numbers and special characters. The page also has a _copy to clipboard_ option which allows a user to copy the created password. Below is a screenshot of the page:

![primary-screen-shot]

When the user clicks _'Generate Password'_, they are prompted with questions which allow us to generate a password meeting their specific criteria. The first prompt asks for a specific password length between 8 and 128 characters.

![passLength-screen-shot]

If the user does not enter a number between 8 and 128 or if they enter an invalid character, the program returns an alert and has them reenter the prompt.

![error-screen-shot]

The next four prompts require _'yes'_ or _'no'_ responses to confirm if the following need to be included in the generated password:
* Lowercase characters
* Uppercase characters
* Numbers
* Special characters

![lowercase-screen-shot]

If the user does not enter a valid _'yes'_ or _'no'_ response, the program will alert them and have them enter the prompt again.

![lower-error-screen-shot]

The user also has the option to exit the program by clicking _'Cancel'_ on any of the prompts. Once exited, the phrase _'Canceled password generator'_ is entered into the text area.

![exit-screen-shot]
![exit-phrase-screen-shot]

You can access the updated website at the following link:
* [Deployed Application](https://hnava47.github.io/PasswordGeneratorH3/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact
Hector Nava - hector.r.nava44@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[primary-screen-shot]: Assets/images/primaryScreenshot.png
[passLength-screen-shot]: Assets/images/passLengthScreenshot.png
[error-screen-shot]: Assets/images/errorScreenshot.png
[exit-screen-shot]: Assets/images/exitScreenshot.png
[exit-phrase-screen-shot]: Assets/images/exitPhraseScreenshot.png
[lowercase-screen-shot]: Assets/images/lowerCaseScreenshot.png
[lower-error-screen-shot]: Assets/images/lowerErrorScreenshot.png
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/hector-nava-mba
