<?php 
	$title = $email = $ingredients = '';
	$errors = array( 'email'=>'', 'title'=>'', 'ingredients'=>'');
	if(isset($_POST['submit'])){		//isset is used to check whether the variable exist and is not null  //$_POST['submit'] it is used for detecting whether the form is submitted or not

		$email = $title = $ingredients = '';
		
		// check email
		if(empty($_POST['email'])){
			$errors = 'An email is required <br />';
		} else{
			$email = $_POST['email'];
			if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
				$errors['email'] = 'Email must be a valid email address';
			}
		}

		// check title
		if(empty($_POST['title'])){
			$errors = 'A title is required <br />';
		} else{
			$title = $_POST['title'];
			if(!preg_match('/^[a-zA-Z\s]+$/', $title)){
				$errors[title] = 'Title must be letters and spaces only';
			}
		}

		// check ingredients
		if(empty($_POST['ingredients'])){
			$errors = 'At least one ingredient is required <br />';
		} else{
			$ingredients = $_POST['ingredients'];
			if(!preg_match('/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/', $ingredients)){
				$errors['ingredients'] = 'Ingredients must be a comma separated list';
			}
		}
		//to check errors that is whether the data is field or empty
		if(array_filter($errors)){	//it return true if there is an error and it returns false if there is no errors
			//echo 'there is an error in the file'
		} else{
			//echo 'no error find so valid(here we save the data but here we are redirecting to its home page)'
			header('Location: ../index.php');
		}

	} // end POST check

?>

<!DOCTYPE html>
<html>
	
	<?php include('templates/header.php'); ?>

	<section class="container grey-text">
		<h4 class="center">Add a Pizza</h4>
		<form class="white" action="add.php" method="POST">
			<label>Your Email</label>
			<input type="text" name="email">
			<div class="red-text"><?php echo $errors['email']?></div>
			<label>Pizza Title</label>
			<input type="text" name="title">
			<div class="red-text"><?php echo $errors['title']?></div>
			<label>Ingredients (comma separated)</label>
			<input type="text" name="ingredients">
			<div class="red-text"><?php echo $errors['ingredients']?></div>
			<div class="center">
				<input type="submit" name="submit" value="Submit" class="btn brand z-depth-0">
			</div>
		</form>
	</section>

	<?php include('templates/footer.php'); ?>

</html>
