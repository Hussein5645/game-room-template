// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to manually add puzzles
function addPuzzles() {
    const images = {
        image1:{
            image:'images/A-1r.jpg',
            name: 'a'
        },
        image2:{
            image:'images/A-2r.jpg',
            name: 'b'
        },
        image3:{
            image:'images/A-3r.jpg',
            name: 'c'
        },
        image4:{
            image:'images/A-4r.jpg',
            name: 'd'
        },


        image5:{
            image:'images/B-1r.jpg',
            name: 'a'
        },
        image6:{
            image:'images/B-2r.jpg',
            name: 'b'
        },
        image7:{
            image:'images/B-3r.jpg',
            name: 'c'
        },
        image8:{
            image:'images/B-4r.jpg',
            name: 'd'
        },
        image9:{
            image:'images/C-1r.jpg',
            name: 'a'
        },
        image10:{
            image:'images/C-2r.jpg',
            name: 'b'
        },
        image11:{
            image:'images/C-3r.jpg',
            name: 'c'
        },
        image12:{
            image:'images/C-4r.jpg',
            name: 'd'
        },
        image13:{
            image:'images/C-5r.jpg',
            name: 'e'
        },
        image14:{
            image:'images/D-1r.jpg',
            name: 'a'
        },
        image15:{
            image:'images/D-2r.jpg',
            name: 'b'
        },
        image16:{
            image:'images/D-3r.jpg',
            name: 'c'
        },
        image17:{
            image:'images/D-4r.jpg',
            name: 'd'
        },
        image18:{
            image:'images/E-1r.jpg',
            name: 'a'
        },
        image19:{
            image:'images/E-2r.jpg',
            name: 'b'
        },
        image20:{
            image:'images/E-3r.jpg',
            name: 'c'
        },
        image21:{
            image:'images/E-4r.jpg',
            name: 'd'
        }
    }    
    const puzzles = {
        puzzle1: {
            images: [images.image1,
                images.image2,images.image3,images.image4
            ],
            options:["a",
                "b","c","d"

            ],
            points:"15",
            answer: "a",
            hint :"جد الصورة المختلفة"
            

        },
        puzzle2: {
            images: [images.image5,
                images.image6,images.image7,images.image8
            ],
            options:["a",
                "b","c","d"

            ],
            points:"20",
            answer: "c",
            hint :"a-قطة  , b-غيوم , c-نجوم , d-شبابيك"
        },
        
        puzzle3: {
            images: [images.image9,
                images.image10,images.image11,images.image12,images.image13
            ],
            options:["اخضر",
                "برتقالي","اصفر","بنفسجي","ازرق","وردي"

            ],
            points:"5",
            answer: "اصفر",
            hint :"ما هو اللون المشترك؟"
        },
        
        puzzle4: {
            images: [images.image14,images.image15,images.image16
            ],
            options:["a",
                "b","c"

            ],
            points:"40",
            answer: "a",
            hint :"a-حفر  , b-التحول , c-التغيير "
        },
        puzzle5: {
            images: [
            images.image18,images.image19,images.image20,images.image21
            ],
            options:["a",
                "b","c","d"

            ],
            points:"7",
            answer: "a",
            hint :"الفم"
        },
        

    };

    // Add each puzzle to Firebase
    for (const [puzzleId, puzzle] of Object.entries(puzzles)) {
        const puzzleRef = database.ref(`puzzles/${puzzleId}`);
        puzzleRef.set(puzzle, (error) => {
            if (error) {
                console.error(`Error adding ${puzzleId}:`, error);
            } else {
                console.log(`${puzzleId} added successfully!`);
            }
        });
    }
}

// Call the function to add puzzles
addPuzzles();
