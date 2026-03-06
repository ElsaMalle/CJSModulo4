export class Componentes {
    static crearTarjetaMascota(mascota) {
        return `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6 class="card-title mb-1">
                                        <i class="bi bi-paw-fill text-primary"></i>
                                        ${mascota.nombre}
                                    </h6>
                                    <p class="text-muted small mb-1">
                                        <i class="bi bi-calendar"></i>
                                        ${mascota.fechaNacimiento} ${mascota.edad} años
                                    </p>
                                    <p class="text-muted small mb-1">
                                        <i class="bi bi-clipboard-pulse"></i>
                                        ${mascota.evolucionmedica}
                                    </p>
                                    <p class="text-muted small mb-1">
                                        <i class="bi bi-person-badge"></i>
                                        Veterinario: Dr. ${mascota.nombreVeterinario}
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <h6 class="card-title mb-1">
                                        <i class="bi bi-person-check"></i>
                                        Dueño
                                    </h6>
                                    <p class="text-muted small mb-1">
                                        ${mascota.nombreCompletoDueno}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-end">
                            <span class="badge bg-danger">
                                <i class="bi bi-check-circle"></i>
                                alta
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}