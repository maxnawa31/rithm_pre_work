EXERCISES:
1) setInterval will run the callback function an infinite amount of times until the timer is cleared.
   setTimeout will run the callback function only once.

2) setInterval will perform a particular task continously at a specified interval of time. On
  the other hand, a loop will perform a particular task a specified amount of times and also does
    not have the option to specify the amount of time between each action performed.

3) first parameter in both setTimeout and setInterval is a callback function.

4)It is important to store both in a variable because both functions return a timerId that is needed
  in order to stop the timer for both.

5)In the context of setTimeout and setInterval, asychronous refers to the concept of Javascript receiving
  instructions to perform certain actions, however instead of performing them immediately, Javascript waits
  for other instructions to finish first. In the case of Javascript, all of the actions on the callstack must be
  performed first before actions in the event queue are processed. Javascript timers are functions that are
  processed in the event queue.
