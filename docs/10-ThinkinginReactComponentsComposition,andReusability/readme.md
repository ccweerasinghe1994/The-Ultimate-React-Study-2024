# 10 - Thinking in React Components, Composition, and Reusability

- [10 - Thinking in React Components, Composition, and Reusability](#10---thinking-in-react-components-composition-and-reusability)
  - [001 Section Overview](#001-section-overview)
  - [002 Setting Up the usePopcorn Project](#002-setting-up-the-usepopcorn-project)
  - [003 How to Split a UI Into Components](#003-how-to-split-a-ui-into-components)
    - [**Why Does Component Size Matter?**](#why-does-component-size-matter)
    - [**Small Components: Pros and Cons**](#small-components-pros-and-cons)
      - [**Pros** of Small Components:](#pros-of-small-components)
      - [**Cons** of Small Components:](#cons-of-small-components)
      - [**Example of Small Components**](#example-of-small-components)
        - [**Overly Small Components:**](#overly-small-components)
    - [**Large Components: Pros and Cons**](#large-components-pros-and-cons)
      - [**Pros** of Large Components:](#pros-of-large-components)
      - [**Cons** of Large Components:](#cons-of-large-components)
      - [**Example of a Large Component**](#example-of-a-large-component)
        - [**Overly Large Component:**](#overly-large-component)
    - [**Finding the Right Balance: The Middle Ground**](#finding-the-right-balance-the-middle-ground)
      - [**The Ideal Component Size**](#the-ideal-component-size)
      - [**Balanced Example: Product Card**](#balanced-example-product-card)
    - [**Guidelines for Deciding Component Size**](#guidelines-for-deciding-component-size)
    - [**Conclusion: Finding the Sweet Spot**](#conclusion-finding-the-sweet-spot)
    - [**The 4 Criteria for Splitting a UI into Components**](#the-4-criteria-for-splitting-a-ui-into-components)
    - [**1. Logical Separation of Content/Layout**](#1-logical-separation-of-contentlayout)
      - [**Example: Product Listing Component**](#example-product-listing-component)
      - [**Before: A Single Component**](#before-a-single-component)
      - [**After: Logical Separation of Content**](#after-logical-separation-of-content)
    - [**2. Reusability**](#2-reusability)
      - [**Example: Reusable Buttons**](#example-reusable-buttons)
      - [**Before: Hardcoded Buttons**](#before-hardcoded-buttons)
      - [**After: Reusable Button Component**](#after-reusable-button-component)
    - [**3. Responsibilities / Complexity**](#3-responsibilities--complexity)
      - [**Example: Handling Both State and UI in One Component**](#example-handling-both-state-and-ui-in-one-component)
      - [**Before: A Component with Too Many Responsibilities**](#before-a-component-with-too-many-responsibilities)
      - [**After: Separating Logic and UI**](#after-separating-logic-and-ui)
    - [**4. Personal Coding Style**](#4-personal-coding-style)
      - [**Example: Breaking Down Layout Components**](#example-breaking-down-layout-components)
      - [**Row and Column Components**](#row-and-column-components)
    - [**Conclusion: How to Split UI into Components**](#conclusion-how-to-split-ui-into-components)
    - [1. **Creating a New Component Creates a New Abstraction**](#1-creating-a-new-component-creates-a-new-abstraction)
      - [**Example**:](#example)
    - [2. **Name a Component According to What It Does or Displays**](#2-name-a-component-according-to-what-it-does-or-displays)
      - [**Example**:](#example-1)
    - [3. **Never Declare a New Component Inside Another Component**](#3-never-declare-a-new-component-inside-another-component)
      - [**Example**:](#example-2)
    - [4. **Co-locate Related Components Inside the Same File**](#4-co-locate-related-components-inside-the-same-file)
      - [**Example**:](#example-3)
    - [5. **It’s Normal for an App to Have Components of Different Sizes**](#5-its-normal-for-an-app-to-have-components-of-different-sizes)
      - [**Example**:](#example-4)
    - [**Conclusion**](#conclusion)
  - [004 Splitting Components in Practice](#004-splitting-components-in-practice)
  - [005 Component Categories](#005-component-categories)
  - [006 Prop Drilling](#006-prop-drilling)
  - [007 Component Composition](#007-component-composition)
  - [008 Fixing Prop Drilling With Composition (And Building a Layout)](#008-fixing-prop-drilling-with-composition-and-building-a-layout)
  - [009 Using Composition to Make a Reusable Box](#009-using-composition-to-make-a-reusable-box)
  - [010 Passing Elements as Props (Alternative to children)](#010-passing-elements-as-props-alternative-to-children)
  - [011 Building a Reusable Star Rating Component](#011-building-a-reusable-star-rating-component)
  - [012 Creating the Stars](#012-creating-the-stars)
  - [013 Handling Hover Events](#013-handling-hover-events)
  - [014 Props as a Component API](#014-props-as-a-component-api)
  - [015 Improving Reusability With Props](#015-improving-reusability-with-props)
  - [016 PropTypes](#016-proptypes)
  - [017 CHALLENGE #1 Text Expander Component](#017-challenge-1-text-expander-component)

## 001 Section Overview
![alt text](image.png)
## 002 Setting Up the usePopcorn Project
## 003 How to Split a UI Into Components

![alt text](image-1.png)
The image you've provided illustrates a very important concept in React development: **Component Size Matters**. It highlights the balance developers need to strike between creating components that are either **too small** or **too large**. Both extremes have drawbacks, and the goal is to find a middle ground that allows for reusability, maintainability, and clarity.

Let’s break this concept down in detail and discuss why component size matters and how to approach this issue with examples.

---

### **Why Does Component Size Matter?**

React encourages **component-based architecture**, where you build your UI by combining smaller, reusable pieces (components). However, deciding how big or small a component should be is a crucial part of development. Components that are **too small** or **too big** lead to various problems, as explained in the image.

---

### **Small Components: Pros and Cons**

#### **Pros** of Small Components:
- **Reusability**: Small components are often easier to reuse in different parts of the application.
- **Single Responsibility**: Following the **Single Responsibility Principle** means that small components are focused on doing one thing and doing it well.

#### **Cons** of Small Components:
- **Too Many Components**: If you break everything down into very small pieces, your codebase could end up with **hundreds of tiny components**. This can make the codebase difficult to navigate and maintain.
- **Over-Abstraction**: Sometimes, breaking things down too much can abstract the logic too much, making it hard to understand how different pieces fit together. Each component may hide too many details of the overall implementation.
- **Confusing Codebase**: As the number of components grows, it can be hard for new developers (or even yourself later on) to figure out where certain logic is implemented because it’s spread out across many files and components.

#### **Example of Small Components**

Let’s consider an example where you have a product card that displays an image, title, and price.

##### **Overly Small Components:**
```jsx
const ProductImage = ({ src }) => <img src={src} alt="Product" />;
const ProductTitle = ({ title }) => <h3>{title}</h3>;
const ProductPrice = ({ price }) => <p>{price}</p>;

const ProductCard = ({ product }) => (
  <div>
    <ProductImage src={product.image} />
    <ProductTitle title={product.title} />
    <ProductPrice price={product.price} />
  </div>
);
```

In this example:
- The `ProductImage`, `ProductTitle`, and `ProductPrice` components are too granular.
- While this approach offers flexibility and reusability, it creates a lot of unnecessary small components, which can make the code harder to manage, especially if these components are not reused elsewhere.

---

### **Large Components: Pros and Cons**

#### **Pros** of Large Components:
- **Easier to Understand Locally**: When components are larger, it’s easier to see all related logic in one place.
- **Less Component Overhead**: Fewer components mean less overhead in terms of managing and navigating the component tree, making it easier to trace functionality when debugging.

#### **Cons** of Large Components:
- **Too Many Responsibilities**: Large components often end up violating the **Single Responsibility Principle** because they handle too many concerns at once (e.g., managing state, rendering UI, handling side effects). This makes the component harder to reason about, test, and maintain.
- **Hard to Reuse**: When a component does too many things, it becomes difficult to reuse it in different parts of the application because its logic and structure are tightly coupled.
- **Complex Code**: With large components, the internal logic can become complex and hard to understand. It becomes harder to know what each part of the component does without a lot of investigation.

#### **Example of a Large Component**

Let’s consider a product card again but this time with too much logic inside one component.

##### **Overly Large Component:**
```jsx
const ProductCard = ({ product }) => {
  const addToCart = () => {
    // Add the product to the cart
  };

  return (
    <div>
      <img src={product.image} alt="Product" />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};
```

In this example:
- The `ProductCard` handles both the rendering of the product details and the logic for adding the product to the cart.
- This tightly couples the rendering logic with the functionality of adding to the cart, making it harder to reuse this component if the cart functionality changes or moves elsewhere.

---

### **Finding the Right Balance: The Middle Ground**

The key takeaway from the image is that **we need to find the right balance** between breaking components down into many small pieces and grouping too many responsibilities in one large component.

#### **The Ideal Component Size**

A good rule of thumb is that a component should:
- **Handle one responsibility** or a **cohesive part of the UI**.
- Be **easy to reuse** but not overly abstracted.
- Be **easy to test** in isolation.
- Be **easy to maintain**, with clear boundaries between concerns.

#### **Balanced Example: Product Card**

Here’s a more balanced approach to creating the `ProductCard` component:

```jsx
const ProductDetails = ({ product }) => (
  <div>
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.price}</p>
  </div>
);

const AddToCartButton = ({ onAdd }) => (
  <button onClick={onAdd}>Add to Cart</button>
);

const ProductCard = ({ product, onAddToCart }) => (
  <div>
    <ProductDetails product={product} />
    <AddToCartButton onAdd={() => onAddToCart(product)} />
  </div>
);
```

- The `ProductDetails` component is responsible for rendering the product information.
- The `AddToCartButton` is a reusable button that handles the "add to cart" action.
- The `ProductCard` component brings them together but delegates the specific responsibilities to smaller, more focused components.

This approach keeps components **small enough to be reusable** but **large enough to handle a meaningful part of the UI** without splitting it into too many trivial pieces.

---

### **Guidelines for Deciding Component Size**

1. **Single Responsibility Principle (SRP)**:
   - Each component should handle one responsibility. If you notice a component doing too many things (e.g., managing state, handling side effects, rendering UI), consider breaking it down into smaller components.

2. **Reusability**:
   - If a part of your component can be reused in multiple places, consider making it a separate component. However, avoid breaking things down into overly granular components if they are unlikely to be reused.

3. **Component Composition**:
   - Think in terms of **component composition**: larger components should be composed of smaller components that handle distinct pieces of the logic/UI. This allows for better readability, maintainability, and testability.

4. **Prop Drilling**:
   - If you find yourself passing too many props through several components, it may be a sign that a component is taking on too many responsibilities or is not positioned correctly in the component hierarchy.

---

### **Conclusion: Finding the Sweet Spot**

There’s no strict rule for how big or small a component should be, but finding the **right balance** is crucial for creating maintainable and scalable applications. 

- **Too many small components** can lead to a fragmented and confusing codebase with too much abstraction.
- **Too large components** can become hard to maintain, understand, and reuse.

Aim for a middle ground where each component has a clear responsibility, is easy to understand, and can be reused where appropriate. By following this approach, you can build more maintainable and scalable React applications.
![alt text](image-2.png)
The image you've provided outlines the key principles for **splitting a user interface (UI) into components** in React. These guidelines are essential for maintaining a clean, reusable, and easy-to-understand codebase. Let’s go through these criteria in depth with examples to illustrate how you should think about breaking down a UI into components.

---

### **The 4 Criteria for Splitting a UI into Components**

1. **Logical Separation of Content/Layout**
2. **Reusability**
3. **Responsibilities/Complexity**
4. **Personal Coding Style**

Let's break down each criterion and understand how to apply it effectively.

---

### **1. Logical Separation of Content/Layout**

The first criterion is ensuring that your components have a **logical separation** between content and layout. This means that each component should represent a distinct part of the UI and handle one specific task or layout element.

#### **Example: Product Listing Component**

Imagine you have a product listing with the following structure:

- Image of the product
- Product title
- Product description
- Price and availability
- Buttons like "Add to Cart" or "Wishlist"

You could structure this as one large component, but that wouldn’t have a logical separation of content. Instead, you could split it up like this:

#### **Before: A Single Component**

```jsx
const ProductCard = ({ product }) => (
  <div>
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <button>Add to Cart</button>
    <button>Wishlist</button>
  </div>
);
```

This component is doing **too much**. It handles the image, text, and buttons in a single place, which is harder to maintain and reuse.

#### **After: Logical Separation of Content**

```jsx
const ProductImage = ({ image, title }) => <img src={image} alt={title} />;
const ProductDetails = ({ title, description, price }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>{price}</p>
  </div>
);
const ProductActions = () => (
  <div>
    <button>Add to Cart</button>
    <button>Wishlist</button>
  </div>
);
const ProductCard = ({ product }) => (
  <div>
    <ProductImage image={product.image} title={product.title} />
    <ProductDetails title={product.title} description={product.description} price={product.price} />
    <ProductActions />
  </div>
);
```

By splitting the content into distinct parts (`ProductImage`, `ProductDetails`, `ProductActions`), you achieve **logical separation**, making it easier to maintain and reuse individual components.

---

### **2. Reusability**

The second criterion is **reusability**. When building components, think about whether they can be reused in different parts of the application. A reusable component is generic and flexible enough to be used in multiple places without needing to modify the core logic.

#### **Example: Reusable Buttons**

In your application, you may have buttons for various actions like "Add to Cart," "Submit," or "Save." Rather than hardcoding these buttons in each place, you can create a **reusable Button component**.

#### **Before: Hardcoded Buttons**

```jsx
const ProductCard = () => (
  <div>
    <button>Add to Cart</button>
    <button>Wishlist</button>
  </div>
);
```

This is not reusable because the button text and behavior are hardcoded.

#### **After: Reusable Button Component**

```jsx
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
const ProductActions = () => (
  <div>
    <Button label="Add to Cart" onClick={() => console.log('Added to cart')} />
    <Button label="Wishlist" onClick={() => console.log('Added to wishlist')} />
  </div>
);
```

Now, the `Button` component can be reused for different actions throughout your app by simply passing different `label` and `onClick` props.

---

### **3. Responsibilities / Complexity**

The third criterion focuses on reducing complexity and ensuring that components follow the **Single Responsibility Principle (SRP)**. A component should have **one responsibility** and do that well. This makes components easier to test, debug, and maintain.

#### **Example: Handling Both State and UI in One Component**

Let’s consider a form component that is responsible for both rendering the form UI and managing form state.

#### **Before: A Component with Too Many Responsibilities**

```jsx
const Form = () => {
  const [name, setName] = useState('');
  const handleSubmit = () => {
    console.log('Form submitted:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

Here, the `Form` component is managing state and rendering the form UI, which makes it harder to maintain and reuse.

#### **After: Separating Logic and UI**

```jsx
const useForm = () => {
  const [name, setName] = useState('');
  const handleSubmit = () => {
    console.log('Form submitted:', name);
  };
  return { name, setName, handleSubmit };
};

const Form = ({ name, setName, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input value={name} onChange={e => setName(e.target.value)} />
    <button type="submit">Submit</button>
  </form>
);

const App = () => {
  const { name, setName, handleSubmit } = useForm();
  return <Form name={name} setName={setName} handleSubmit={handleSubmit} />;
};
```

By splitting the form logic into the `useForm` custom hook, the `Form` component becomes responsible only for rendering the UI, while the `useForm` hook handles the state and logic.

---

### **4. Personal Coding Style**

While the first three criteria are more objective, **personal coding style** plays a role in how you break down components. Different developers have different approaches based on their preferences, team conventions, or specific project requirements.

#### **Example: Breaking Down Layout Components**

Some developers may prefer to create layout components for things like rows, columns, or containers.

#### **Row and Column Components**

```jsx
const Row = ({ children }) => <div style={{ display: 'flex' }}>{children}</div>;
const Column = ({ children }) => <div style={{ flex: 1 }}>{children}</div>;

const LayoutExample = () => (
  <Row>
    <Column>Left Content</Column>
    <Column>Right Content</Column>
  </Row>
);
```

Other developers might prefer to use simpler HTML structures without abstracting them into layout components. In this case, personal coding style dictates how granular you get with component creation.

---

### **Conclusion: How to Split UI into Components**

In React development, splitting the UI into components is not just about breaking things down but doing so thoughtfully and strategically. Following these four criteria helps you avoid common pitfalls and create a scalable, maintainable application:

1. **Logical Separation of Content/Layout**: Break components down based on their role in the UI, separating concerns like layout and content.
2. **Reusability**: Look for opportunities to make components generic and reusable across different parts of the app.
3. **Responsibilities/Complexity**: Ensure each component follows the Single Responsibility Principle (SRP) and isn’t overloaded with too much logic or too many concerns.
4. **Personal Coding Style**: Consider your own preferences and team conventions when deciding how granular or abstract your components should be.

By keeping these principles in mind, you can build a well-structured React app that is easy to maintain, extend, and scale.

![alt text](image-3.png)
![alt text](image-4.png)

Let's go through each of the general guidelines presented in the image, breaking them down with examples to illustrate their importance in React development:

### 1. **Creating a New Component Creates a New Abstraction**

- **Explanation**: When you create a new component, you are introducing a new level of abstraction in your code. Abstractions are useful, but they come at a cost: switching back and forth between too many components can increase the complexity of understanding the app.
- **Mental Cost**: More components mean more mental energy required to keep track of what each component does and how they interact with each other. 
- **Best Practice**: Don’t create new components too early in the development process. Only introduce a new component when there’s a clear need for it (e.g., when you want to reuse it in multiple places, or to improve readability by separating concerns).

#### **Example**:

- **Too Many Components Too Early**:
  ```jsx
  const Title = ({ text }) => <h1>{text}</h1>;
  const Description = ({ text }) => <p>{text}</p>;

  const ProductCard = ({ product }) => (
    <div>
      <Title text={product.title} />
      <Description text={product.description} />
    </div>
  );
  ```

  Here, `Title` and `Description` might be overkill if they’re only used in this `ProductCard` and don’t add significant complexity to the component. Creating them adds unnecessary abstraction.

- **Simpler Approach**:
  ```jsx
  const ProductCard = ({ product }) => (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
  ```

  By keeping everything in one component, you reduce abstraction and make the code easier to follow.

---

### 2. **Name a Component According to What It Does or Displays**

- **Explanation**: Naming is crucial to making your code easy to understand. Components should have clear, descriptive names that indicate what they do or display. Don’t hesitate to use longer names if it improves clarity.
- **Avoid Short or Vague Names**: Using names like `Box` or `Wrapper` doesn’t provide enough information about what the component actually does.
- **Best Practice**: Give components names like `ProductCard`, `UserProfile`, or `NavigationBar`, which clearly describe the purpose of the component.

#### **Example**:

- **Poor Naming**:
  ```jsx
  const Box = ({ children }) => <div>{children}</div>;
  ```

  The name `Box` is too generic and doesn’t tell us much about what the component does.

- **Better Naming**:
  ```jsx
  const ProductCard = ({ product }) => (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
  ```

  `ProductCard` is much clearer. It tells us this component is responsible for displaying product information.

---

### 3. **Never Declare a New Component Inside Another Component**

- **Explanation**: Declaring components inside other components causes React to recreate the component on every render, which can lead to performance issues and unnecessary re-renders.
- **Separation of Concerns**: Components should have their own scope and should not be declared inside other components to maintain clear boundaries.
- **Best Practice**: Always declare components outside of other components.

#### **Example**:

- **Incorrect**:
  ```jsx
  const ParentComponent = () => {
    const ChildComponent = () => <div>Child</div>;
    return <ChildComponent />;
  };
  ```

  In this example, `ChildComponent` is recreated every time `ParentComponent` renders, which can degrade performance.

- **Correct**:
  ```jsx
  const ChildComponent = () => <div>Child</div>;

  const ParentComponent = () => <ChildComponent />;
  ```

  By moving `ChildComponent` outside, we prevent it from being recreated unnecessarily.

---

### 4. **Co-locate Related Components Inside the Same File**

- **Explanation**: Components that are closely related (e.g., a `ProductImage` component and a `ProductDetails` component used inside a `ProductCard`) can be kept in the same file. This practice makes the code easier to follow and maintain.
- **Don’t Separate Too Early**: Don’t split components into different files prematurely. It’s okay to colocate components until the code becomes too large or too complex.
- **Best Practice**: Co-locate related components, especially if they will only be used together. Later, you can move them to separate files if needed.

#### **Example**:

- **Co-locating Components**:
  ```jsx
  // ProductCard.js
  const ProductImage = ({ image }) => <img src={image} alt="Product" />;
  const ProductDetails = ({ title, description }) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div>
      <ProductImage image={product.image} />
      <ProductDetails title={product.title} description={product.description} />
    </div>
  );
  ```

  In this example, the related components (`ProductImage`, `ProductDetails`, and `ProductCard`) are kept in the same file because they belong to the same logical grouping. Only move them to separate files if they grow in complexity or are used in other parts of the app.

---

### 5. **It’s Normal for an App to Have Components of Different Sizes**

- **Explanation**: Not all components need to be the same size. Some components will be small and focused (like a `Button`), while others might be larger and more complex (like a `Dashboard` component). This variation is normal and expected.
- **Small vs. Large Components**: Small components handle specific tasks, while larger components might manage more complex layouts or combine multiple smaller components.
- **Best Practice**: Don’t worry if some components are large as long as they are managing complexity appropriately. If a component becomes too large, look for ways to refactor it into smaller pieces.

#### **Example**:

- **Small Component**:
  ```jsx
  const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
  );
  ```

  This is a small, focused component that handles a specific task (rendering a button).

- **Larger Component**:
  ```jsx
  const Dashboard = ({ user, stats }) => (
    <div>
      <h1>Welcome, {user.name}</h1>
      <Stats stats={stats} />
      <RecentActivity activities={user.activities} />
    </div>
  );
  ```

  The `Dashboard` component is larger because it combines multiple smaller components (`Stats`, `RecentActivity`) to display a complex UI. This is perfectly fine as long as it’s managing the complexity appropriately.

---

### **Conclusion**

These guidelines are key to building maintainable, scalable React applications:

1. **New abstractions** (new components) should be created only when necessary to avoid over-complicating the app.
2. **Component names** should be descriptive of what the component does or displays.
3. **Components should not be declared inside other components** to avoid performance issues and maintain separation of concerns.
4. **Related components should be co-located** until complexity warrants separation.
5. **It’s natural for some components to be small and others to be large**—don’t feel like all components need to be the same size.

By following these guidelines, your components will be easier to understand, maintain, and scale in a React application.

## 004 Splitting Components in Practice
## 005 Component Categories
## 006 Prop Drilling
## 007 Component Composition
## 008 Fixing Prop Drilling With Composition (And Building a Layout)
## 009 Using Composition to Make a Reusable Box
## 010 Passing Elements as Props (Alternative to children)
## 011 Building a Reusable Star Rating Component
## 012 Creating the Stars
## 013 Handling Hover Events
## 014 Props as a Component API
## 015 Improving Reusability With Props
## 016 PropTypes
## 017 CHALLENGE #1 Text Expander Component