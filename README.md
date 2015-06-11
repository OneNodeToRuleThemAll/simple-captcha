
Usage:

```javascript
  captcha: function(req, res) {
    var captcha = require('simple-captcha').create({width: 100, height: 40});
    req.session.captcha = captcha.text();
    console.log(req.session.captcha);
    captcha.generate();
    res.write(captcha.buffer('image/png'));
    res.end();
  }
```