import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestModel } from '../../core/models/test.model';
import { TestService } from '../../core/services/test.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent implements OnInit {
  tests: TestModel[] = [];
  newTest: Omit<TestModel, 'id'> = { name: '', description: '' };
  editingTest: TestModel | null = null;
  error: string | null = null;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.loadTests();
  }

  loadTests() {
    this.testService.getTests().subscribe({
      next: (data) => {
        this.tests = data;
      },
      error: (err) => {
        this.error = 'Erreur lors de la récupération des tests : ' + err.message;
        console.error(err);
      }
    });
  }

  onAddTest() {
    if (!this.newTest.name || !this.newTest.description) {
      this.error = 'Veuillez remplir tous les champs';
      return;
    }

    this.testService.addTest(this.newTest).subscribe({
      next: () => {
        this.loadTests();
        this.newTest = { name: '', description: '' };
      },
      error: (err) => {
        this.error = 'Erreur lors de l\'ajout du test : ' + err.message;
        console.error(err);
      }
    });
  }

  onEdit(test: TestModel) {
    this.editingTest = { ...test };
  }

  onUpdateTest() {
    if (!this.editingTest) return;

    this.testService.updateTest(this.editingTest).subscribe({
      next: () => {
        this.loadTests();
        this.editingTest = null;
      },
      error: (err) => {
        this.error = 'Erreur lors de la mise à jour du test : ' + err.message;
        console.error(err);
      }
    });
  }

  cancelEdit() {
    this.editingTest = null;
  }

  onDelete(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce test ?')) {
      this.testService.deleteTest(id).subscribe({
        next: () => {
          this.loadTests();
        },
        error: (err) => {
          this.error = 'Erreur lors de la suppression du test : ' + err.message;
          console.error(err);
        }
      });
    }
  }
}