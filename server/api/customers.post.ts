export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // Here you would typically save the customer to a database
    return { message: 'Customer created', customer: body }; 
})