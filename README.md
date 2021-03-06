# X Pent Up UI

A simple personal financial budget application to be able to get used to Ember's development model. The (quite good)
Ember's tutorial/guide is being used in the learning process.

For the main project, go to [X Pent Up](https://github.com/alejoceballos/x-pent-up) repository.

# Checkpoints (The Ember Guides)

Reference:
- https://guides.emberjs.com/v3.19.0/

## Introduction

### Getting Started

#### How To Use The Guides

- [x] What is Ember?
- [x] Organization
- [x] Assumptions
- [x] Accessibility
- [x] Reporting a problem

#### Quick Start

.

.

.

#### Working with HTML, CSS, and JavaScript

.

.

.

#### Anatomy of an Ember App

.

.

.

### Tutorial

#### Part 1

##### Chapter 1 - Orientation

- [x] Installing Ember CLI
- [x] Creating a New Ember App with Ember CLI
- [x] Starting and Stopping the Development Server
- [x] Editing Files and Live Reload
- [x] Working with HTML, CSS and Assets in an Ember App

##### Chapter 2 - Building Pages

- [x] Defining Routes
- [x] Using Route Templates
- [ ] Defining Routes with Custom Paths
- [x] Linking Pages with the `<LinkTo>` Component

##### Chapter 3 - Automated Testing

- [x] The Purpose of Automated Testing
- [x] Adding Acceptance Tests with Generators
- [x] Writing Acceptance Tests
- [x] Practicing the Testing Workflow

##### Chapter 4 - Component Basics

- [x] Extracting Markup into Components
- [x] Passing Content to Components with `{{yield}}`
- [x] Refactoring Existing Code
- [x] Writing Component Tests
- [x] Using the Application Template and `{{outlet}}`s

##### Chapter 5 - More About Components

- [x] Generating Components
- [x] Organizing Code with Namespaced Components
- [ ] Forwarding HTML Attributes with `...attributes`
- [ ] Determining the Appropriate Amount of Test Coverage

##### Chapter 6 - Interactive Components

- [x] Adding Behavior to Components with Classes
- [x] Accessing Instance States from Templates
- [x] Managing State with Tracked Properties
- [x] Responding to User Interaction with Actions
- [x] Testing User Interactions

##### Chapter 7 - Reusable Components

- [ ] Managing Application-level Configurations
- [ ] Generating a Component with a Component Class
- [ ] Parameterizing Components with Arguments
- [x] Interpolating Values in Templates
- [x] Overriding HTML Attributes in `...attributes`
- [ ] Refactoring with Getters and Auto-track
- [ ] Getting JavaScript Values into the Test Context

##### Chapter 8 - Working With Data

- [x] Working with Route Files
- [x] Returning Local Data from the Model Hook
- [x] Accessing Route Models from Templates
- [x] Mocking Server Data with Static JSON Files
- [x] Fetching Remote Data from the Model Hook
- [x] Adapting Server Data
- [x] Loops and Local Variables in Templates with `{{#each}}`

#### Part 2

##### Chapter 9 - Route Params

- [x] Routes with Dynamic Segments
- [x] Links with Dynamic Segments
- [x] Component Tests with Access to the Router
- [x] Accessing Parameters from Dynamic Segments
- [x] Displaying Model Details with a Component
- [x] Sharing Common Setup Code Between Tests
- [x] Adding a Route Template

##### Chapter 10 - Service Injection

- [ ] Scoping the Feature
- [ ] Splattributes and the `class` Attribute
- [ ] Accessing the Current Page URL
- [ ] Why We Can't Test `window.location.href`
- [ ] The Router Service
- [ ] Ember Services vs. Global Variables
- [ ] Mocking Services in Tests

##### Chapter 11 - Ember Data

- [x] What is Ember Data?
- [x] Ember Data Models
- [x] Testing Models
- [x] Loading Models in Routes
- [x] The Ember Data Store
- [x] Working with Adapters and Serializers

##### Chapter 12 - Provider Components

- [x] Add input
- [x] Refactoring the index template into a component
- [x] Using Ember's `<Input>`
- [ ] Adding the `<Rentals::Filter>` Provider Component

## Core Concepts

### Components

.

.

.

### Routing

.

.

.

### Services

.

.

.

### Ember Data

#### Introduction

- [x] What are Ember Data models?
- [x] Ember Data flexibility
- [x] The Store and a Single Source of Truth
- [x] Models
- [x] Records
- [x] Adapter
- [x] Caching
- [x] Architecture Overview

#### Defining Models

- [x] Defining Attributes
    - [x] Transforms
    - [x] Custom Transforms
    - [x] Options
    - [x] Read-only Attributes

#### Finding Records

.

.

.

#### Creating, Updating and Deleting

.

.

.

#### Relationships

.

.

.


## App Structure

### Pods

I am using the pod structure for routes, controllers and templates, but the classic structure for models.
```
.
├── app.js
├── index.html
├── models
│   └── . . .
├── pods
│   ├── application
│   │   └── . . .
│   ├── budget
│   │   └── . . .
│   └── components
│       └── . . .
├── router.js
├── styles
│   └── app.scss
└── templates
    └── index.hbs
```

Set `usePods` in`.ember-cli` for pods usage by default:
```json
{
  .
  .
  .
  "usePods": true
}
```

Use the `pod` argument when creating a new model:
```shell script
ember generate <model-name> --pod
```

## Useful commands

### Ember Generate Route

```shell script
ember g route <complete/route/path>
```
```
installing route
  create app/pods/complete/route/path/route.js
  create app/pods/complete/route/path/template.hbs
updating router
  add route complete/route/path
installing route-test
  create tests/unit/pods/complete/route/path/route-test.js
```

### Ember Generate Acceptance Test
```shell script
ember g acceptance-test page-name
```
```
installing acceptance-test
  create tests/acceptance/page-name-test.js
```

### Ember Generate Component Template and Test
Generates only:
- template.hbs
- component-test.js

```shell script
ember g component complete/component/path
```
```
installing component
  create app/pods/components/complete/component/path/template.hbs
  skip app/pods/components/complete/component/path/component.js
  tip to add a class, run `ember generate component-class complete/component/path`
installing component-test
  create tests/integration/pods/components/complete/component/path/component-test.js
```

### Ember Generate Component Class
Generates only:
- component.js

```shell script
ember g component-class complete/component/path
```
```
installing component-class
  create app/pods/components/complete/component/path/component.js
```

### Ember Generate Model
```shell script
ember g model model-name --pod
```
```
DEPRECATION: Using both .ember-cli usePods settings and --pod flag together has been deprecated.
installing model
  create app/models/model-name.js
installing model-test
  create tests/unit/models/model-name-test.js
```

## Interesting links

- https://github.com/DockYard/ember-composable-helpers
- https://github.com/ebryn/ember-component-css
- https://github.com/yapplabs/ember-wormhole
- http://getbem.com/
- https://cli.emberjs.com/release/advanced-use/stylesheets/
- https://github.com/ebryn/ember-component-css
