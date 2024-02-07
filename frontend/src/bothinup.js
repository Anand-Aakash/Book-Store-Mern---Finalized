import * as Components from './components/login/Components';
const [signIn, toggle] = React.useState(true);
<Components.Container>
<Components.SignUpContainer signinIn={signIn}>
    <Components.Form>
        <Components.Title>Create Account</Components.Title>
        <Components.Input type='text' placeholder='Name' />
        <Components.Input type='email' placeholder='Email' />
        <Components.Input type='password' placeholder='Password' />
        <Components.Button> Sign Up</Components.Button>
    </Components.Form>
</Components.SignUpContainer>

<Components.SignInContainer signinIn={signIn}>
     <Components.Form>
         <Components.Title>Sign in</Components.Title>
         <Components.Input type='email' placeholder='Email' />
         <Components.Input type='password' placeholder='Password' />
         <Components.Button>Sigin In</Components.Button>
     </Components.Form>
</Components.SignInContainer>

<Components.OverlayContainer signinIn={signIn}>
    <Components.Overlay signinIn={signIn}>

    <Components.LeftOverlayPanel signinIn={signIn}>
        <Components.Title>Welcome Back!</Components.Title>
        <Components.Paragraph>
            To keep connected with us please login with your personal info
        </Components.Paragraph>
        <Components.GhostButton onClick={() => toggle(true)} >
            Sign In
        </Components.GhostButton>
        </Components.LeftOverlayPanel>

        <Components.RightOverlayPanel signinIn={signIn}>
          <Components.Title>Hello, Friend!</Components.Title>
          <Components.Paragraph>
              Enter Your personal details and start journey with us
          </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)} onSubmit={() => history.push('/home')}>
              {/* <Components.GhostButton onClick={() => history.push('/home')}> */}
                  Sigin Up
              </Components.GhostButton> 
        </Components.RightOverlayPanel>

    </Components.Overlay>
</Components.OverlayContainer>

</Components.Container>