console.log("this is cv project");
//Data is an array of object which contains information about the candidates
const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },

  {
    name: "Shubham Sharma",
    age: 28,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },

  {
    name: "Camella Cabello",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

  {
    name: "Aishwariya Rai",
    age: 45,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },

  {
    name: "Rohit Sharma",
    age: 34,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];
//CV itetrator

function cvitetrator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const candidates = cvitetrator(data);
nextcv();
//Button listener

let nextbtn = document.getElementById("btn");

nextbtn.addEventListener("click", nextcv);

function nextcv() {
  const currentcandidate = candidates.next().value;
  console.log("nectcv called");
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
   
  if(currentcandidate!=undefined){
  image.innerHTML = `<img src='${currentcandidate.image}'>`;
  profile.innerHTML = `<ul class="list-group">
   <li class="list-group-item">${currentcandidate.name}</li>
   <li class="list-group-item">${currentcandidate.age}</li>
   <li class="list-group-item">${currentcandidate.city}</li>
   <li class="list-group-item">${currentcandidate.language}</li>
   <li class="list-group-item">${currentcandidate.framework}</li>
 </ul>`;
  }
  else{
     console.log("Finish");
     alert('End of application');
     window.location.reload();
  }
}
