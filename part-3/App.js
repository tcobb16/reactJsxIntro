function App() {
    return (
      <div>
        <Person
          name="Nahla"
          age={15}
          hobbies={["Scratching", "sleeping", "hunting mice"]}
        />
        <Person 
            name="Maggie" 
            age={25} 
            hobbies={["reading", "teaching"]}
        />
        <Person
          name="Katie"
          age={21}
          hobbies={["watching tv", "fixing cars"]}
        />
        </div>
    );
  }