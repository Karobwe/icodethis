function App() {
    const listItems = data.map((item, index) => {
        return (
            <SongItem key={index} rank={index} title={item.title} artist={item.artist} poster={item.poster} count={item.count} />
        );
    });

    return (
        <div className={"relative bg-gray-100 text-gray-900 min-h-screen w-full absolute"}>
            <div className={"h-[30vh] top-0"}>
                <Wave/>
            </div>

            
        </div>
    );
}

function SongItem({title, artist, poster, count, rank}) {
    return (
        <li className={"flex items-center gap-x-2"}>
            <div className={"w-8 h-8 aspect-square rounded-full border flex items-center justify-center"}>{rank + 1}</div>

            <div className={"w-20 min-w-[5rem] aspect-square overflow-hidden border-2 border-red-400"}>
                <img className={"object-cover h-full"} src={poster}></img>
            </div>

            <div className={"mr-auto"}>
                <h2 className={"text-xl font-semibold"}>{title}</h2>

                <h3>{artist}</h3>
            </div>

            <div className={"font-medium text-slate-400"}>{count}</div>
        </li>
    );
}

function Wave() {
    return (
        <svg className={"object-cover h-full"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f6677d" fillOpacity="1" d="M0,288L1440,160L1440,0L0,0Z"></path>
        </svg>
    );
}

function LeftArrowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
    );
}

const data = [
    {
        title: "In my feelings",
        artist: "Drake",
        count: "2,089,766",
        poster: "https://i.scdn.co/image/ab67616d00001e02f907de96b9a4fbc04accc0d5",
    },
    {
        title: "I like it",
        artist: "Cardi B & Bad Bunny & J Balvin",
        count: "1,864,874",
        poster: "https://i.scdn.co/image/ab67616d00001e02a0caffda54afd0a65995bbab",
    },
    {
        title: "Better Now",
        artist: "Post Malone",
        count: "1,543,632",
        poster: "https://i.scdn.co/image/ab67616d00001e02b1c4b76e23414c9f20242268",
    },
    {
        title: "Boo'd Up",
        artist: "Ella Mai",
        count: "1,234,877",
        poster: "https://i.scdn.co/image/ab67616d00001e021067b9877d6435ae9ecb26ac",
    },
    {
        title: "Nice for what",
        artist: "Drake",
        count: "1,122,879",
        poster: "https://i.scdn.co/image/ab67616d00001e0267ddee6f495ca66055c912a5",
    },
    {
        title: "Yes indeed",
        artist: "Lil Baby & Drake",
        count: "986,884",
        poster: "https://i.scdn.co/image/ab67616d00001e026cab41f8c84d6164976400d4",
    },
    {
        title: "Love lies",
        artist: "Khalid & Normani",
        count: "765,864",
        poster: "https://i.scdn.co/image/ab67616d00001e02a90756e0bbaaacf13f176499",
    },
    {
        title: "Mine",
        artist: "Bazzi",
        count: "732,771",
        poster: "https://i.scdn.co/image/ab67616d00001e02f9f2d43ff44bdfbe8c556f8d",
    },
]

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);