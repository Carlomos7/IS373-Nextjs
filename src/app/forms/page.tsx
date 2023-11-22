import { headers } from 'next/headers';



export default function Page() {
  const csrfToken = headers().get('X-CSRF-Token') || 'missing';

  return (
    <>
      <p>CSRF token value: {csrfToken}</p>
      <br />
      <form action="/form-handler" method="post">
        <legend>Form with CSRF :</legend>
        <input type="hidden" name="csrf_token" value={csrfToken} />
        <input type="text" name="input1" />
        <br/>
        <input type="text" name="input2" />
        <br/>
        <input type="text" name="input3" />
        <br/>
        <input type="text" name="input4" />
        <button type="submit">Submit</button>
      </form>
      
      
    </>
  );
}