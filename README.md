# TOC
- [TOC](#toc)
- [MANO Task App](#mano-task-app)
- [Getting Started](#getting-started)
  - [Step 1: Start the Metro Server](#step-1-start-the-metro-server)
  - [Step 2: Start your Application](#step-2-start-your-application)
  - [Congratulations! :tada:](#congratulations-tada)
- [Dependencies](#dependencies)
  - [Production](#production)
- [App Structure](#app-structure)
  - [Assets](#assets)
  - [Components](#components)
  - [Contexts](#contexts)
  - [Hooks](#hooks)
  - [I18n](#i18n)
  - [Navigation](#navigation)
  - [Routes](#routes)
  - [Screens](#screens)
  - [Services](#services)
  - [Types](#types)
  - [Views](#views)
- [Troubleshooting](#troubleshooting)
- [Learn More](#learn-more)

# MANO Task App

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

| For Android | For iOS |
| --- | --- |
| `yarn android` |  `yarn ios` |


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Dependencies
## Production
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Format JS](https://formatjs.io/)
- [FlashList](https://shopify.github.io/flash-list/)
  - Fast & Performant React Native List
- [FastImage](https://github.com/DylanVann/react-native-fast-image#readme)
  - FastImage, performant React Native image component.
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv#readme)
  - The fastest key/value storage for React Native.


# App Structure
## Assets
- [Fonts](/src/assets/fonts)
  - All the project fonts are stored here
  - Distributed to the native side by this command
    - for linking: `npx react-native-asset link`
    - for unlinking: `npx react-native-asset unlink`
- [Images](/src/assets/images)
  - All the project images are stored here

## Components
- [ProductItem](/src/components/ProductItem/index.tsx)
  - A compound component to render the product item inside any list
  - Currently it contains:
    - Image
    - Title
    - Brand
    - Price
  - Usage:
    ```tsx
    import { ProductItem } from 'components';
      ...
      <ProductItem item={item} index={index}>
         <ProductItem.Image/>
         <ProductItem.Brand />
         <ProductItem.Title />
         <ProductItem.Price />
      </ProductItem>
    ```
- [Button](/src/components/Button.tsx)
- [Container](/src/components/Container/index.tsx)
- [List](/src/components/List.tsx)
- [ManoText](/src/components/ManoText.tsx)
  - A special text component that should be used across the app
  - It supports all react native text component with some extra props to handle the style as wanted in a design system
- [Price](/src/components/Price.tsx)
  - A special text component that should be used to render the price
- [RowWrapContainer](/src/components/RowWrapContainer.tsx)
  - Like the name, it's a container that wraps the children in a row and wrap them if they exceed the width of the screen
- [Separator](/src/components/Separator.tsx)
  - Mainly to be used as ItemSeparatorComponent in a list
- [Spacer](/src/components/Spacer.tsx)
  - Adds a space between the item
  - Basically it's a View with a `flex: 1`

## Contexts
- [ProductContext](/src/contexts/Product.tsx)
  - Handle Product Item or Product Page compound components state

## Hooks
- [useGetProductsQuery](/src/hooks/useGetProductsQuery.ts)
  - A react query hook to fetch the products
- [useGetSimilarProducts](/src/hooks/useGetSimilarProducts.ts)
  - A react hook that consumes `useGetProductsQuery` to get similar products
  - It takes the product as an argument and it returns a list of `IProduct`

## I18n
Here we handle all the translations for the app. We use [Format JS](https://formatjs.io/) to handle the translations. The translations are stored in the [locales](/src/i18n/locales) folder.
Not only translation as we use format strings based on locales to format the price and the date.

## Navigation
- [Container](/src/navigation/index.tsx)
  - Handle the navigation container
- [MainStack](/src/navigation/MainStack.tsx)

## Routes
Mainly for the navigation routes and the navigation types

## Screens
- [Discovery](/src/screens/Discovery.tsx)
  - List of products screen
  - It uses the [List](/src/components/List.tsx) component to render the list
  - It uses the [ProductItem](/src/components/ProductItem/index.tsx) component to render the product item
  - It uses the [useGetProductsQuery](/src/hooks/useGetProductsQuery.ts) hook to fetch the products
- [Product](/src/screens/Product.tsx)
  - It takes the product(`IProduct`) from navigation params and renders the content
  - It use the [ProductPage](/src/views/product/index.tsx) view to render the product page
  - It uses the [useGetSimilarProducts](/src/hooks/useGetSimilarProducts.ts) hook to fetch the similar products

## Services
- [AsyncStorage](/src/services/async-storage.ts)
  - Wraps the MMKV to handle the async storage
- [Logger](/src/services/logger.ts)
  - A simple logger from `rnx-kit`
- [Query](/src/services/query.tsx)
  - Handles react query initialization and configuration
  - Handles react query persisting and rehydration using `AsyncStorage`

## Types
- [Category](/src/types/category.ts)
- [Image](/src/types/image.ts)
- [List](/src/types/list.ts)
- [Product](/src/types/product.ts)

## Views
- [ProductPage](/src/views/product/index.tsx)
  - A compound component to render the product item inside any list
  - Currently it contains:
    - Carousel
    - Title
    - Price
    - Actions
    - Category
    - SimilarProducts
    - Spacer
  - Usage:
    ```tsx
    import { ProductPage } from 'views';
      ...
      <ProductPage product={product}>
         <ProductPage.Carousel />
         <ProductPage.Category />
         <ProductPage.Price />
         <ProductPage.Title />
         <ProductPage.Spacer />
         <ProductPage.SimilarProducts />
         <ProductPage.Actions />
      </ProductPage>
    ```

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
