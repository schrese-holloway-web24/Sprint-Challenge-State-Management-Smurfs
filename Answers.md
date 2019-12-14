1. What problem does the context API help solve?

    Rather than needing to store and pass props down, by way of prop-drilling, we can instead create a component outside of the state tree and bring it into the tree wherever we would like, without needing to prop drill through components that don't need the state held in context. This is especially useful for components that are used in several places throughout your app. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - actions: 
		- a representation of what a user can do (as far as interaction) inside of an application itself
		- they tell your app what to do when an event happens
	- reducers: 
		- takes in the previous state and action and then returns the new/updated state
		- I realize that this is a direct quote from a lecture, but it is legitimately what I think of when I think of reducers: "It's the logic that says 'I have received this action, how do I update the store in response to that action?'
	- store: 
		- holds all of the state (data) for the app
		- the reducer lives in the store and updates it based on actions
		- it is known as the 'Single Source of Truth' because it holds the state/data of the app in one single state object.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    - Application State: state that is stored at the highest level of the app as needed, and then passed down the state tree via prop drilling
	- Component State: state that is stored outside of the state tree that is then passed to the individual components that need it
	- You would want to use Component State if you have some data that needs to be accessable by MANY components at various nesting levels. That said, you don't want to use it too often, because it makes component reuse more difficult

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    - It's a redux middleware library who's purpose is to help us make asynchronous operations in redux (which, by default, is run synchronously). 
	- It allows us to call a function, which returns a function within our action-creator (which allows them to run async operations, like axios calls).


1. What is your favorite state management system you've learned and this sprint? Please explain why!

    - It's surprising that i'm saying this, but I actually like redux more than context. I had some issues figuring out how to pass state around in context, but using redux has been slightly easier (that said, I think it would have been the opposite if we had learned redux first). They seem to feed on one another and use some of the same ideas/syntax. While I'm not good at redux quite yet, I can see a lot of possibilities with it and can't wait to explore them (which is why I like it most). 