import StoryCard from "./StoryCard";
const stories = [
  {
    name: "Priyanuj Dehingia",
    src: "https://pbs.twimg.com/profile_images/1204241336578146305/S3dW48NM_400x400.jpg",
    profile: "https://qph.fs.quoracdn.net/main-thumb-163401431-200-bgglqygzidgspoboynkbcudfkvdadwki.jpeg",
  }
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(story =>(
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  )
}

export default Stories
