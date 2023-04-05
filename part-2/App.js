function App() {
    return (
      <div>
        <Tweet
          name="Cooper"
          username="coopthegreatdane"
          date={new Date().toDateString()}
          message="I'm the cutest pup!!"
        />
        <Tweet
          name="Lily"
          username="livingwithlily"
          date={new Date().toDateString()}
          message="my fur is literally everywhere...even on the clothes in the closet I'm not allowed in"
        />
        <Tweet
          name="Adam"
          username="adchar"
          date={new Date().toDateString()}
          message="Why did I get a great dane and a bernese..."
        />
      </div>
    );
  }