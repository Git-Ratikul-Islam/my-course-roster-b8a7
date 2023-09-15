The features of this project

1.Card credit will be count while clicking at select button
2. Each card can't be select twice. It will show alert
3. After it has crossed limit of credit it will show a alert.



In the Home component:

SelectedCourse: This nation variable is used to keep an array of selected publications via the consumer. Initially, it is set to an empty array.

TotalCost: This kingdom variable is used to save the whole credit hours decided on by way of the consumer. It starts offevolved at zero and is updated as courses are selected.

UseEffect: This hook is used to fetch course information from 'route.Json' when the issue mounts. The fetched facts is then set to the course nation variable.

HaldleSelectCourse: This function is called while a consumer selects a path. It checks if the chosen route already exists within the selectedCourse array, calculates the overall closing credit score hours, and updates the country variables therefore. It also displays mistakes messages using the Swal library if important.

In the Cart element:

selectedCourse: This prop is exceeded to the Cart element from the Home element, and it is used to show the list of decided on publications inside the cart.

Ultimate: This prop is used to display the final credit score hours inside the cart.

TotalCost: This prop is used to display the whole credit score hours in the cart.

The kingdom in both additives is managed the use of the useState hook, which allows the components to react to adjustments in these country variables and re-render as essential. When a person selects a route within the Home thing, it updates the country variables (selectedCourse, remaining, and totalCost), and those up to date values are surpassed as props to the Cart element for display.

Overall, this approach guarantees that the UI is responsive to person interactions and that the state is up to date and displayed appropriately in both additives.



