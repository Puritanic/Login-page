# Login page

Tamedia frontend challenge

## Notes

### How you would store image resources?

Service worker caching is good choice for images that wouldn't change often (like logos, or static backgrounds) or will change only in application deployment time. On the other side for images that are dynamic and are going to change often the best solution is a 3rd party image storing service like Cloudinary or AWS S3 buckets which is even better option because of domain control security. Downside of this choice is that we don't have control over response speed of this 3rd party services, because of that it would be good to have some placeholder images (or loader animations) in place until images are fetched. We can also keep images in filesystem on our server, but that can be slow and expensive, especially if we have a lot of images on page.

### How you would handle the CI/CD pipeline?

I would setup Jenkins/Travis to watch repository's `master` or `development` branch and then trigger application tests each time someone pushes to repository. If build is passing, usually QE team will do final tests and then, if everything is good, the build will be merged to the master branch and deployed to production.

So far I've used Jenkins and Travis for CI and Spinnaker for CD.

### Generate the appropriate Dockerfile?

I have some understanding of how Docker is used in CI/CD but I've never used it in that way (only for working with linux distros in local and research).

---

## Getting Started

```shell
cd login
yarn
yarn run start
```

### Prerequisites

-   `node`
-   `npm || yarn`

## Built With

-   [React](reactjs.org) - The web view framework
-   [Redux](https://redux.js.org/) - Predictable state container for JavaScript apps.
-   [Sass](https://sass-lang.com/) - CSS with superpowers

-   Bootstraped with [create-react-app](https://github.com/facebook/create-react-app).

## Author

-   **Darko Tasevski** - _Initial work_ - [Puritanic](https://github.com/Puritanic)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
