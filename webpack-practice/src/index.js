import "./style.css";

const content = document.getElementById("content")
const heading = document.createElement('header')
const nav =document.createElement('nav')

const h1= document.createElement('h1')
h1.textContent="Welcome to our restaurant"

content.appendChild(h1)
const links =['Home','About','contact']
const hrefs=['#hometext','#abouttext','#a']
const headingText = ['Break fast','Menu','Contact me']
const text =['Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur corporis minus mollitia repellat, cumque pariatur, tenetur laudantium dolores doloremque placeat veniam quisquam, itaque neque possimus temporibus! Debitis, iusto in!','A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!',
    'email:robel@gmail.com'+ '\n'+'phone no: 093323542'
    ]

    
content.appendChild(heading)
heading.appendChild(nav)

   links.forEach((element ,index)=> {
   const link=document.createElement('a')
   link.textContent=element
   link.href=hrefs[index]
   nav.appendChild(link)
  
   link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    displayContent(index);
  });
  
})

const home = document.createElement('div')
home.setAttribute('id','content2')
document.body.append(home)



function displayContent(index) {
  home.innerHTML = ""; // Clear previous content
  const h1 = document.createElement('h1')
  const contenttext = document.createElement('p')
  contenttext.setAttribute('id','contenttext')
  contenttext.textContent = text[index];
  h1.textContent=headingText[index];
  home.appendChild(h1)
  home.appendChild(contenttext);
  
 let outputText = text[index];
  if (index === 2) {
    contenttext.innerHTML = outputText.replace(/\n/g, '<br>');
  } else {
    contenttext.textContent = outputText;
  }

}
displayContent(0)